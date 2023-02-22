'use strict';

/**
 * antipasto service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::antipasto.antipasto');
