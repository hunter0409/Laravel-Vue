function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/myquestions', name: 'myquestions', component: page('myquestions.vue') },
  { path: '/myaccount', name: 'myaccount', component: page('myaccount.vue') },
  { path: '/expert', name: 'expert', component: page('expert.vue') },
  { path: '/get_clients', name: 'get_clients', component: page('get_clients.vue') },
  { path: '/help_clients', name: 'help_clients', component: page('help_clients.vue') },

  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },
  { path: '/new_project_page', name: 'new_project_page', component: page('new_project_page.vue') },
  { path: '/project/:id', name: 'project', component: page('project.vue') },
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  { path: '*', component: page('errors/404.vue') }
]
