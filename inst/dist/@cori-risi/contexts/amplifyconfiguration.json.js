/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
var Auth = {
	oauth: {
		domain: "authcori.auth.us-east-1.amazoncognito.com"
	}
};
var aws_project_region = "us-east-1";
var aws_user_pools_id = "us-east-1_QeA4600FA";
var aws_user_pools_web_client_id = "5eusi16g0o2q1g1rr5ehgudodm";
var aws_cognito_domain = "authcori.auth.us-east-1.amazoncognito.com";
var aws_cognito_region = "us-east-1";
var aws_cognito_identity_pool_id = "us-east-1:2194a76a-fa3d-4c33-999e-e3c4b2b049ee";
var aws_cognito_signup_attributes = [
	"EMAIL"
];
var aws_cognito_username_attributes = [
	"EMAIL",
	"OPENID"
];
var aws_cognito_verification_mechanisms = [
	"EMAIL",
	"OPENID"
];
var aws_cognito_password_protection_settings = {
	passwordPolicyMinLength: 8,
	passwordPolicyCharacters: [
		"REQUIRES_NUMBERS",
		"REQUIRES_LOWERCASE",
		"REQUIRES_UPPERCASE",
		"REQUIRES_SYMBOLS"
	]
};
var aws_appsync_graphqlEndpoint = "https://bdkxhfgus5dztobic7gvn5ymue.appsync-api.us-east-1.amazonaws.com/graphql";
var aws_appsync_region = "us-east-1";
var aws_appsync_apiKey = "da2-yexc3mow25fc3amaendi4vscuq";
var aws_appsync_authenticationType = "API_KEY";
var aws_appsync_additionalAuthenticationTypes = "AMAZON_COGNITO_USER_POOLS,AWS_IAM";
var modelIntrospection = {
	version: 1,
	models: {
		Todo: {
			name: "Todo",
			fields: {
				id: {
					name: "id",
					isArray: false,
					type: "ID",
					isRequired: true,
					attributes: [
					]
				},
				content: {
					name: "content",
					isArray: false,
					type: "String",
					isRequired: false,
					attributes: [
					]
				},
				owner: {
					name: "owner",
					isArray: false,
					type: "String",
					isRequired: false,
					attributes: [
					]
				},
				createdAt: {
					name: "createdAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: true,
					attributes: [
					]
				},
				updatedAt: {
					name: "updatedAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: true,
					attributes: [
					]
				}
			},
			syncable: true,
			pluralName: "Todos",
			attributes: [
				{
					type: "model",
					properties: {
					}
				},
				{
					type: "key",
					properties: {
						fields: [
							"id"
						]
					}
				},
				{
					type: "auth",
					properties: {
						rules: [
							{
								provider: "userPools",
								ownerField: "owner",
								allow: "owner",
								identityClaim: "cognito:username",
								operations: [
									"create",
									"update",
									"delete",
									"read"
								]
							},
							{
								allow: "public",
								operations: [
									"read"
								]
							}
						]
					}
				}
			],
			primaryKeyInfo: {
				isCustomPrimaryKey: false,
				primaryKeyFieldName: "id",
				sortKeyFieldNames: [
				]
			}
		}
	},
	enums: {
	},
	nonModels: {
	}
};
var amplifyconfig = {
	Auth: Auth,
	aws_project_region: aws_project_region,
	aws_user_pools_id: aws_user_pools_id,
	aws_user_pools_web_client_id: aws_user_pools_web_client_id,
	aws_cognito_domain: aws_cognito_domain,
	aws_cognito_region: aws_cognito_region,
	aws_cognito_identity_pool_id: aws_cognito_identity_pool_id,
	aws_cognito_signup_attributes: aws_cognito_signup_attributes,
	aws_cognito_username_attributes: aws_cognito_username_attributes,
	aws_cognito_verification_mechanisms: aws_cognito_verification_mechanisms,
	aws_cognito_password_protection_settings: aws_cognito_password_protection_settings,
	aws_appsync_graphqlEndpoint: aws_appsync_graphqlEndpoint,
	aws_appsync_region: aws_appsync_region,
	aws_appsync_apiKey: aws_appsync_apiKey,
	aws_appsync_authenticationType: aws_appsync_authenticationType,
	aws_appsync_additionalAuthenticationTypes: aws_appsync_additionalAuthenticationTypes,
	modelIntrospection: modelIntrospection
};

export { Auth, aws_appsync_additionalAuthenticationTypes, aws_appsync_apiKey, aws_appsync_authenticationType, aws_appsync_graphqlEndpoint, aws_appsync_region, aws_cognito_domain, aws_cognito_identity_pool_id, aws_cognito_password_protection_settings, aws_cognito_region, aws_cognito_signup_attributes, aws_cognito_username_attributes, aws_cognito_verification_mechanisms, aws_project_region, aws_user_pools_id, aws_user_pools_web_client_id, amplifyconfig as default, modelIntrospection };
//# sourceMappingURL=amplifyconfiguration.json.js.map
