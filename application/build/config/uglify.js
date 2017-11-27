module.exports = {
	options: {
		beautify: true,
		"max-line-len": 100000,
		mangle: false,
		preserveComments: false,
		compress: {
			// drop_console: false,
			sequences: false
		}
	},
	target: {
		files: {
			'public/script/app.min.js': [
				'node_modules/jquery/dist/jquery.js',
				'node_modules/angular/angular.js',
				'node_modules/angular-animate/angular-animate.js',
				'node_modules/angular-aria/angular-aria.js',
				'node_modules/angular-material/angular-material.js',
				'node_modules/angular-messages/angular-messages.js',
				'node_modules/angular-resource/angular-resource.js',
				'node_modules/angular-ui-router/release/angular-ui-router.js',

				'source/scripts/app/app.module.js',
				'source/scripts/app/app.route.js',
				'source/scripts/app/app.config.js',
				'source/scripts/app/app.run.js',
				'source/scripts/app/factory/app.factory.run.js',

				'source/scripts/common/common.module.js',
				'source/scripts/common/directive/common.directive.escape.js',

				'source/scripts/public/public.module.js',
				'source/scripts/public/public.route.js',

				'source/scripts/public/footer/public.footer.controller.js',
				'source/scripts/public/header/public.header.controller.js',
				'source/scripts/public/panel/public.panel.controller.js',

				'source/scripts/public/index/public.index.module.js',
				'source/scripts/public/index/public.index.controller.js',
				'source/scripts/public/index/public.index.route.js',

				'source/scripts/public/designer/public.designer.module.js',
				'source/scripts/public/designer/public.designer.service.js',
				'source/scripts/public/designer/public.designer.controller.js',
				'source/scripts/public/designer/public.designer.route.js',

				'source/scripts/public/designer/view/public.designer.view.module.js',
				'source/scripts/public/designer/view/public.designer.view.service.js',
				'source/scripts/public/designer/view/public.designer.view.controller.js',
				'source/scripts/public/designer/view/public.designer.view.route.js',

				'source/scripts/public/answer/public.answer.module.js',
				'source/scripts/public/answer/public.answer.controller.js',
				'source/scripts/public/answer/public.answer.route.js',

				'source/scripts/public/borrowing/public.borrowing.module.js',
				'source/scripts/public/borrowing/public.borrowing.controller.js',
				'source/scripts/public/borrowing/public.borrowing.route.js',

				'source/scripts/public/certificates/public.certificates.module.js',
				'source/scripts/public/certificates/public.certificates.controller.js',
				'source/scripts/public/certificates/public.certificates.route.js',

				'source/scripts/public/contact/public.contact.module.js',
				'source/scripts/public/contact/public.contact.controller.js',
				'source/scripts/public/contact/public.contact.route.js',

				'source/scripts/public/custom/public.custom.module.js',
				'source/scripts/public/custom/public.custom.controller.js',
				'source/scripts/public/custom/public.custom.route.js',

				'source/scripts/public/engagement/public.engagement.module.js',
				'source/scripts/public/engagement/public.engagement.controller.js',
				'source/scripts/public/engagement/public.engagement.route.js',

				'source/scripts/public/engagement/list/public.engagement.list.module.js',
				'source/scripts/public/engagement/list/public.engagement.list.controller.js',
				'source/scripts/public/engagement/list/public.engagement.list.route.js',

				'source/scripts/public/error/public.error.module.js',
				'source/scripts/public/error/public.error.controller.js',
				'source/scripts/public/error/public.error.route.js',

				'source/scripts/public/exchange/public.exchange.module.js',
				'source/scripts/public/exchange/public.exchange.controller.js',
				'source/scripts/public/exchange/public.exchange.route.js',

				'source/scripts/public/privacy/public.privacy.module.js',
				'source/scripts/public/privacy/public.privacy.controller.js',
				'source/scripts/public/privacy/public.privacy.route.js',

				'source/scripts/public/product/public.product.module.js',
				'source/scripts/public/product/public.product.route.js',

				'source/scripts/public/product/list/public.product.list.module.js',
				'source/scripts/public/product/list/public.product.list.service.js',
				'source/scripts/public/product/list/public.product.list.controller.js',
				'source/scripts/public/product/list/public.product.list.route.js',

				'source/scripts/public/product/view/public.product.view.module.js',
				'source/scripts/public/product/view/public.product.view.service.js',
				'source/scripts/public/product/view/public.product.view.controller.js',
				'source/scripts/public/product/view/public.product.view.route.js',

				'source/scripts/public/questions/public.questions.module.js',
				'source/scripts/public/questions/public.questions.controller.js',
				'source/scripts/public/questions/public.questions.route.js',

				'source/scripts/public/questions/view/public.questions.view.module.js',
				'source/scripts/public/questions/view/public.questions.view.controller.js',
				'source/scripts/public/questions/view/public.questions.view.route.js',

				'source/scripts/public/repair/public.repair.module.js',
				'source/scripts/public/repair/public.repair.controller.js',
				'source/scripts/public/repair/public.repair.route.js',

				'source/scripts/public/repair/checking/public.repair.checking.module.js',
				'source/scripts/public/repair/checking/public.repair.checking.controller.js',
				'source/scripts/public/repair/checking/public.repair.checking.route.js',

				'source/scripts/public/repair/cleaning/public.repair.cleaning.module.js',
				'source/scripts/public/repair/cleaning/public.repair.cleaning.controller.js',
				'source/scripts/public/repair/cleaning/public.repair.cleaning.route.js',

				'source/scripts/public/repair/gluing/public.repair.gluing.module.js',
				'source/scripts/public/repair/gluing/public.repair.gluing.controller.js',
				'source/scripts/public/repair/gluing/public.repair.gluing.route.js',

				'source/scripts/public/repair/refinishing/public.repair.refinishing.module.js',
				'source/scripts/public/repair/refinishing/public.repair.refinishing.controller.js',
				'source/scripts/public/repair/refinishing/public.repair.refinishing.route.js',

				'source/scripts/public/repair/repolishing/public.repair.repolishing.module.js',
				'source/scripts/public/repair/repolishing/public.repair.repolishing.controller.js',
				'source/scripts/public/repair/repolishing/public.repair.repolishing.route.js',

				'source/scripts/public/repair/sizing/public.repair.sizing.module.js',
				'source/scripts/public/repair/sizing/public.repair.sizing.controller.js',
				'source/scripts/public/repair/sizing/public.repair.sizing.route.js',

				'source/scripts/public/repair/soldering/public.repair.soldering.module.js',
				'source/scripts/public/repair/soldering/public.repair.soldering.controller.js',
				'source/scripts/public/repair/soldering/public.repair.soldering.route.js',

				'source/scripts/public/service/public.service.module.js',
				'source/scripts/public/service/public.service.controller.js',
				'source/scripts/public/service/public.service.route.js',

				'source/scripts/public/service/alteration/public.service.alteration.module.js',
				'source/scripts/public/service/alteration/public.service.alteration.controller.js',
				'source/scripts/public/service/alteration/public.service.alteration.route.js',

				'source/scripts/public/service/antique/public.service.antique.module.js',
				'source/scripts/public/service/antique/public.service.antique.controller.js',
				'source/scripts/public/service/antique/public.service.antique.route.js',

				'source/scripts/public/service/appraisal/public.service.appraisal.module.js',
				'source/scripts/public/service/appraisal/public.service.appraisal.controller.js',
				'source/scripts/public/service/appraisal/public.service.appraisal.route.js',

				'source/scripts/public/service/costume/public.service.costume.module.js',
				'source/scripts/public/service/costume/public.service.costume.controller.js',
				'source/scripts/public/service/costume/public.service.costume.route.js',

				'source/scripts/public/service/custom/public.service.custom.module.js',
				'source/scripts/public/service/custom/public.service.custom.controller.js',
				'source/scripts/public/service/custom/public.service.custom.route.js',

				'source/scripts/public/service/engraving/public.service.engraving.module.js',
				'source/scripts/public/service/engraving/public.service.engraving.controller.js',
				'source/scripts/public/service/engraving/public.service.engraving.route.js',

				'source/scripts/public/studio/public.studio.module.js',
				'source/scripts/public/studio/public.studio.controller.js',
				'source/scripts/public/studio/public.studio.route.js',

				'source/scripts/public/studio/about/public.studio.about.module.js',
				'source/scripts/public/studio/about/public.studio.about.controller.js',
				'source/scripts/public/studio/about/public.studio.about.route.js',

				'source/scripts/public/studio/business/public.studio.business.module.js',
				'source/scripts/public/studio/business/public.studio.business.controller.js',
				'source/scripts/public/studio/business/public.studio.business.route.js',

				'source/scripts/public/studio/career/public.studio.career.module.js',
				'source/scripts/public/studio/career/public.studio.career.controller.js',
				'source/scripts/public/studio/career/public.studio.career.route.js',

				'source/scripts/public/studio/environment/public.studio.environment.module.js',
				'source/scripts/public/studio/environment/public.studio.environment.controller.js',
				'source/scripts/public/studio/environment/public.studio.environment.route.js',

				'source/scripts/public/studio/equipment/public.studio.equipment.module.js',
				'source/scripts/public/studio/equipment/public.studio.equipment.controller.js',
				'source/scripts/public/studio/equipment/public.studio.equipment.route.js',

				'source/scripts/public/studio/facility/public.studio.facility.module.js',
				'source/scripts/public/studio/facility/public.studio.facility.controller.js',
				'source/scripts/public/studio/facility/public.studio.facility.route.js',

				'source/scripts/public/studio/press/public.studio.press.module.js',
				'source/scripts/public/studio/press/public.studio.press.controller.js',
				'source/scripts/public/studio/press/public.studio.press.route.js',

				'source/scripts/public/studio/press/list/public.studio.press.list.module.js',
				'source/scripts/public/studio/press/list/public.studio.press.list.service.js',
				'source/scripts/public/studio/press/list/public.studio.press.list.controller.js',
				'source/scripts/public/studio/press/list/public.studio.press.list.route.js',

				'source/scripts/public/studio/press/view/public.studio.press.view.module.js',
				'source/scripts/public/studio/press/view/public.studio.press.view.controller.js',
				'source/scripts/public/studio/press/view/public.studio.press.view.route.js',

				'source/scripts/public/terms/public.terms.module.js',
				'source/scripts/public/terms/public.terms.controller.js',
				'source/scripts/public/terms/public.terms.route.js',

				'source/scripts/public/wedding/public.wedding.module.js',
				'source/scripts/public/wedding/public.wedding.controller.js',
				'source/scripts/public/wedding/public.wedding.route.js',

				'source/scripts/public/wedding/list/public.wedding.list.module.js',
				'source/scripts/public/wedding/list/public.wedding.list.controller.js',
				'source/scripts/public/wedding/list/public.wedding.list.route.js',
			]
		}
	}
};