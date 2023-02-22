'use strict';

/**
 * primo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::primo.primo');
