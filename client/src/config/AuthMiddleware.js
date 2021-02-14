const authMiddleware = (router) => {
    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (sessionStorage.getItem('token') == null) {
                next({
                    path: '/login',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                next();
            }
        } else if (to.matched.some(record => record.meta.guest)) {
            if (sessionStorage.getItem('token') == null) {
                next()
            } else {
                next({ name: 'Home' })
            }
        } else {
            next()
        }
    })
};
export default authMiddleware;