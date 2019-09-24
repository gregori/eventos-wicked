/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // {
  //   path: '/login',
  //   name: 'login.index',
  //   component: () => import('@/views/Login/Index.vue'),
  //   meta: {
  //     guest: true,
  //   },
  // },
  // {
  //   path: '/recover-password',
  //   name: 'login.recoverPassword',
  //   component: () => import('@/views/Login/RecoverPassword.vue'),
  //   meta: {
  //     guest: true,
  //   },
  // },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard.index',
  //   component: () => import('@/views/Dashboard/Index.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  // {
  //   path: '/register',
  //   name: 'register.index',
  //   component: () => import('@/views/Register/Index.vue'),
  //   meta: {
  //     guest: true,
  //   },
  // },
  // {
  //   path: '/team/edit',
  //   name: 'team.edit',
  //   component: () => import('@/views/Team/Edit.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  // {
  //   path: '/team/all',
  //   name: 'team_list.new',
  //   components: () => import('@/views/Team/TeamList.vue'),
  //   meta: {
  //     auth: false, /*Modify to true, if it will need a leader before create the team*/
  //   },
  // },
  // {
  //   path: '/profile/edit',
  //   name: 'profile.edit',
  //   component: () => import('@/views/Profile/Edit.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  // {
  //   path: '/member/edit',
  //   name: 'member.edit',
  //   component: () => import('@/views/Member/Edit.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  // {
  //   path: '/robot/edit',
  //   name: 'robot.edit',
  //   component: () => import('@/views/Robot/Edit.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  {
    path: '/categories',
    name: 'categories.index',
    component: () => import('@/views/Categories/Index.vue'),
  },
  {
    path: '/about',
    name: 'about.index',
    component: () => import('@/views/About/Index.vue'),
  },
  // {
  //   path: '/payment',
  //   name: 'payment.index',
  //   component: () => import('@/views/Payment/Index.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  {
    path: '/info',
    name: 'informations.index',
    component: () => import('@/views/Informations/Index.vue'),
    meta: {
      auth: false,
    },
  }, //// Minicourses
  // {
  //   path: '/miniCourse/register',
  //   name: 'minicourse.register.index',
  //   component: () => import('@/views/MiniCourse/Register/Index.vue'),
  //   meta: {
  //     guest: true,
  //   },
  // },
  // {
  //   path: '/miniCourse/categories',
  //   name: 'minicourse.categories.index',
  //   component: () => import('@/views/MiniCourse/Categories/Index.vue'),
  //   meta: {
  //     guest: true,
  //   },
  // },,
  // {
  //   path: '/miniCourse/dashboard',
  //   name: 'minicourse.dashboard.index',
  //   component: () => import('@/views/MiniCourse/Dashboard/Index.vue'),
  //   meta: {
  //     auth: true,
  //   },
  // },
  // {
  //   path: '/miniCourse/informations',
  //   name: 'minicourse.informations.index',
  //   component: () => import('@/views/MiniCourse/Informations/Index.vue'),
  //   meta: {
  //     auth: false
  //   }
  // },
  // { // Url for redirect for minicourse
  //   path: '/miniCourse*',
  //   redirect: '/miniCourse/informations'
  // },
  {
    path: '/404',
    name: 'notFound.index',
    component: () => import('@/views/notFound/Index.vue'),
  },
  {
    path: '/',
    name: 'welcome.index',
    component: () => import('@/views/Welcome/Index.vue'),
  },
  { path: '*', redirect: '/404' },
];
