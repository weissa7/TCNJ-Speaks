/* Name: Aaron Weiss
 * Course: CSC-415
 * Semester: Fall 2017
 * Instructor: Dr. Pulimood
 * Project Name: TCNJ-Speaks
 * Project Description: Bring awareness to community about relevant social justice issues.
 * File Name: router.config.ts
 * File Description: Configures UI-router transition services.
 * Last Modified: 11/10/17 (m/d/y)
*/

import { UIRouter, Category } from '@uirouter/core';

export function routerConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;

  router.trace.enable(Category.TRANSITION);

}