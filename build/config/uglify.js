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
			'public/scripts/app.min.js': [
				'node_modules/angular/angular.js',
				'node_modules/angular-animate/angular-animate.js',
				'node_modules/angular-aria/angular-aria.js',
				'node_modules/angular-base64-upload/dist/angular-base64-upload.js',
				'node_modules/angular-material/angular-material.js',
				'node_modules/angular-messages/angular-messages.js',
				'node_modules/angular-resource/angular-resource.js',
				'node_modules/angular-loading-bar/build/loading-bar.js',
				'node_modules/angular-ui-router/release/angular-ui-router.js',
				'node_modules/angular-base64-upload/dist/angular-base64-upload.js',
				'node_modules/satellizer/dist/satellizer.js',

				'source/scripts/app/app.module.js',
				'source/scripts/app/app.route.js',
				'source/scripts/app/app.config.js',
				'source/scripts/app/factory/app.run.factory.js',
				'source/scripts/app/app.run.js',
				'source/scripts/app/header/header.controller.js',
				'source/scripts/app/panel/panel.controller.js',
				'source/scripts/app/footer/footer.controller.js',

				'source/scripts/common/app.common.module.js',
				'source/scripts/common/profile.service.js',
				//'source/scripts/common/directive/escape.directive.js',
				'source/scripts/common/directive/email.check.directive.js',
				'source/scripts/common/directive/user.check.directive.js',
				'source/scripts/common/directive/user.uncheck.directive.js',
				'source/scripts/common/factory/common.date.factory.js',
				'source/scripts/common/factory/common.pool.factory.js',
				'source/scripts/common/factory/common.setting.factory.js',
				'source/scripts/common/factory/common.user.factory.js',

				'source/scripts/public/app.public.module.js',
				'source/scripts/public/app.public.route.js',

				'source/scripts/public/login/app.public.login.module.js',
				'source/scripts/public/login/app.public.login.controller.js',
				'source/scripts/public/login/app.public.login.route.js',

				'source/scripts/public/register/app.public.register.module.js',
				'source/scripts/public/register/confirm/app.public.register.confirm.module.js',
				'source/scripts/public/register/confirm/app.public.register.confirm.controller.js',
				'source/scripts/public/register/confirm/app.public.register.confirm.route.js',

				'source/scripts/public/register/form/app.public.register.form.module.js',
				'source/scripts/public/register/form/app.public.register.form.controller.js',
				'source/scripts/public/register/form/app.public.register.form.service.js',
				'source/scripts/public/register/form/app.public.register.form.route.js',

				'source/scripts/public/register/policy/app.public.register.policy.module.js',
				'source/scripts/public/register/policy/app.public.register.policy.controller.js',
				'source/scripts/public/register/policy/app.public.register.policy.route.js',

				'source/scripts/public/register/token/app.public.register.token.module.js',
				'source/scripts/public/register/token/app.public.register.token.controller.js',
				'source/scripts/public/register/token/app.public.register.token.service.js',
				'source/scripts/public/register/token/app.public.register.token.route.js',

				'source/scripts/public/register/expired/app.public.register.expired.module.js',
				'source/scripts/public/register/expired/app.public.register.expired.controller.js',
				'source/scripts/public/register/expired/app.public.register.expired.route.js',

				'source/scripts/public/forgot/app.public.forgot.module.js',
				'source/scripts/public/forgot/app.public.forgot.route.js',
				'source/scripts/public/forgot/request/public.forgot.request.module.js',
				'source/scripts/public/forgot/request/public.forgot.request.service.js',
				'source/scripts/public/forgot/request/public.forgot.request.controller.js',
				'source/scripts/public/forgot/request/public.forgot.request.route.js',

				'source/scripts/public/forgot/expired/app.public.forgot.expired.module.js',
				'source/scripts/public/forgot/expired/app.public.forgot.expired.controller.js',
				'source/scripts/public/forgot/expired/app.public.forgot.expired.route.js',

				'source/scripts/public/forgot/sent/public.forgot.sent.module.js',
				'source/scripts/public/forgot/sent/public.forgot.sent.controller.js',
				'source/scripts/public/forgot/sent/public.forgot.sent.route.js',

				'source/scripts/public/forgot/reset/public.forgot.reset.module.js',
				'source/scripts/public/forgot/reset/public.forgot.reset.service.js',
				'source/scripts/public/forgot/reset/public.forgot.reset.controller.js',
				'source/scripts/public/forgot/reset/public.forgot.reset.route.js',

				'source/scripts/public/forgot/token/public.forgot.token.module.js',
				'source/scripts/public/forgot/token/public.forgot.token.service.js',
				'source/scripts/public/forgot/token/public.forgot.token.controller.js',
				'source/scripts/public/forgot/token/public.forgot.token.route.js',
				//'source/scripts/public/reset/send/controller.js',

				'source/scripts/public/invite/invite.module.js',
				'source/scripts/public/invite/invite.route.js',

				'source/scripts/public/invite/complete/complete.module.js',
				'source/scripts/public/invite/complete/complete.route.js',
				'source/scripts/public/invite/complete/complete.controller.js',

				'source/scripts/public/invite/policy/policy.module.js',
				'source/scripts/public/invite/policy/policy.route.js',
				'source/scripts/public/invite/policy/policy.service.js',
				'source/scripts/public/invite/policy/policy.controller.js',

				'source/scripts/public/invite/token/invite.token.module.js',
				'source/scripts/public/invite/token/invite.token.route.js',
				'source/scripts/public/invite/token/invite.token.controller.js',
				'source/scripts/public/invite/token/invite.token.service.js',

				'source/scripts/private/app.private.module.js',
				'source/scripts/private/app.private.route.js',

				'source/scripts/private/pool/app.pool.module.js',
				'source/scripts/private/pool/pool.route.js',
				'source/scripts/private/pool/pool.service.js',

				'source/scripts/private/create/create.module.js',
				'source/scripts/private/create/create.controller.js',
				'source/scripts/private/create/create.service.js',
				'source/scripts/private/create/create.route.js',

				'source/scripts/private/create/auto/create.auto.module.js',
				'source/scripts/private/create/auto/create.auto.controller.js',
				'source/scripts/private/create/auto/create.auto.route.js',

				'source/scripts/private/create/manual/create.manual.module.js',
				'source/scripts/private/create/manual/create.manual.controller.js',
				'source/scripts/private/create/manual/create.manual.route.js',

				'source/scripts/private/pool/list/pool.list.module.js',
				'source/scripts/private/pool/list/pool.list.controller.js',
				'source/scripts/private/pool/list/pool.list.route.js',
				'source/scripts/private/pool/view/pool.view.module.js',
				'source/scripts/private/pool/view/pool.view.controller.js',
				'source/scripts/private/pool/view/pool.view.route.js',

				'source/scripts/private/pool/invite/pool.invite.module.js',
				'source/scripts/private/pool/invite/pool.invite.route.js',

				'source/scripts/private/pool/invite/confirm/confirm.module.js',
				'source/scripts/private/pool/invite/confirm/confirm.controller.js',
				'source/scripts/private/pool/invite/confirm/confirm.route.js',

				'source/scripts/private/pool/invite/expired/expired.module.js',
				'source/scripts/private/pool/invite/expired/expired.controller.js',
				'source/scripts/private/pool/invite/expired/expired.route.js',

				'source/scripts/private/pool/invite/token/token.module.js',
				'source/scripts/private/pool/invite/token/token.controller.js',
				'source/scripts/private/pool/invite/token/token.route.js',
				'source/scripts/private/pool/invite/token/token.service.js',

				'source/scripts/private/setting/app.setting.module.js',
				'source/scripts/private/setting/setting.route.js',

				'source/scripts/private/setting/profile/app.profile.module.js',
				'source/scripts/private/setting/profile/profile.controller.js',
				'source/scripts/private/setting/profile/profile.route.js',

				'source/scripts/private/setting/social/app.social.module.js',
				//'source/scripts/private/setting/social/setting.social.controller.js',
				'source/scripts/private/setting/social/social.route.js',

				'source/scripts/private/setting/transactions/app.transactions.module.js',
				//'source/scripts/private/setting/transactions/transactions.controller.js',
				'source/scripts/private/setting/transactions/transactions.route.js',

				'source/scripts/private/friend/friend.module.js',
				'source/scripts/private/friend/friend.invite.service.js',
				'source/scripts/private/friend/friend.invite.resend.service.js',
				'source/scripts/private/friend/friend.service.js',

				'source/scripts/private/friend/list/friend.list.module.js',
				'source/scripts/private/friend/list/friend.list.route.js',
				'source/scripts/private/friend/list/friend.list.controller.js',

				'source/scripts/private/friend/expired/expired.module.js',
				'source/scripts/private/friend/expired/expired.route.js',
				'source/scripts/private/friend/expired/expired.controller.js',

				'source/scripts/private/friend/confirm/confirm.module.js',
				'source/scripts/private/friend/confirm/confirm.route.js',
				'source/scripts/private/friend/confirm/confirm.controller.js',

				'source/scripts/private/friend/token/module.js',
				'source/scripts/private/friend/token/route.js',
				'source/scripts/private/friend/token/controller.js',
				'source/scripts/private/friend/token/service.js',

				'source/scripts/private/transaction/app.transaction.module.js',
				'source/scripts/private/transaction/list/transaction.list.module.js',
				'source/scripts/private/transaction/list/transaction.list.controller.js',
				'source/scripts/private/transaction/list/transaction.list.route.js',
				'source/scripts/private/transaction/view/transaction.view.module.js',
				'source/scripts/private/transaction/view/transaction.view.controller.js',
				'source/scripts/private/transaction/view/transaction.view.route.js'
			]
		}
	}
};