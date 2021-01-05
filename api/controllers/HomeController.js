/**
 * TemplateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    fronted: function (_, res) { 
        res.renderVue('homepage', { /* Data */ }, { /* Options */ })
    },
};

