'use strict';

/**
 * dolce service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dolce.dolce');
