import './styles/main.css';
import { DEMO_MODE } from './lib/supabaseClient.js';
import { getSession, onAuthStateChange, getMyProfile } from './modules/auth.js';
import { createAuthView, createOnboardingView } from './modules/authView.js';
import { createTabBar } from './modules/nav.js';
import { createHomeView } from './modules/homeView.js';
import { createFriendsView } from './modules/friendsView.js';
import { createChatView } from './modules/chatView.js';
import { createProfileView } from './modules/profileView.js';

const app = document.getElementById('app');

app.innerHTML =
  '<main id="view"></main>' +
  '<div class="bar" id="bar" hidden></div>' +
  '<nav class="tabbar" id="tabbar" hidden></nav>';

const view = document.getElementById('view');
const bar = document.getElementById('bar');
const tabbarEl = document.getElementById('tabbar');

let currentUserId = null;
const getUserId = () => currentUserId;

let views = null; // se crea una sola vez que sabemos que hay sesión
let tabBar = null;

function buildViews() {
  bar.hidden = false;
  tabbarEl.hidden = false;
  return {
    home: createHomeView({ container: view, barContainer: bar, getUserId }),
    friends: createFriendsView({ container: view }),
    chat: createChatView({ container: view }),
    profile: createProfileView({ container: view, getUserId, onSignedOut: handleSignedOut }),
  };
}

function showTab(key) {
  bar.hidden = key !== 'home';
  if (!views) return;
  views[key].boot();
}

async function enterApp(userId) {
  currentUserId = userId;
  views = buildViews();
  if (!tabBar) {
    tabBar = createTabBar({ container: tabbarEl, onSelect: showTab, initial: 'home' });
  }
  showTab('home');
}

function handleSignedOut() {
  currentUserId = null;
  views = null;
  tabBar = null;
  bar.hidden = true;
  tabbarEl.hidden = true;
  showAuth();
}

function showAuth() {
  bar.hidden = true;
  tabbarEl.hidden = true;
  createAuthView({ container: view, onAuthed: (user) => checkOnboardingThen(user.id) }).boot();
}

async function checkOnboardingThen(userId) {
  const { data: profile } = await getMyProfile(userId);
  const needsOnboarding = !profile || /^user_[a-f0-9]{10}$/.test(profile.username || '');
  if (needsOnboarding) {
    createOnboardingView({ container: view, userId, onDone: () => enterApp(userId) }).boot();
  } else {
    enterApp(userId);
  }
}

async function boot() {
  if (DEMO_MODE) {
    // Sin Supabase configurado: se puede explorar "Inicio" sin cuenta.
    currentUserId = null;
    views = buildViews();
    tabBar = createTabBar({ container: tabbarEl, onSelect: showTab, initial: 'home' });
    showTab('home');
    return;
  }

  const { data } = await getSession();
  if (data?.session?.user) {
    await checkOnboardingThen(data.session.user.id);
  } else {
    showAuth();
  }

  onAuthStateChange((session) => {
    if (!session && currentUserId) handleSignedOut();
  });
}

boot();
