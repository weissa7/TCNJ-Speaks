import { UIRouter, Category } from '@uirouter/core';

export function routerConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;

  router.trace.enable(Category.TRANSITION);

}