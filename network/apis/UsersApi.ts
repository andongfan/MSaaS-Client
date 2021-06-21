/* tslint:disable */
/* eslint-disable */
/**
 * MsaasBackend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    LoginForm,
    LoginFormFromJSON,
    LoginFormToJSON,
    LoginResult,
    LoginResultFromJSON,
    LoginResultToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    RegisterForm,
    RegisterFormFromJSON,
    RegisterFormToJSON,
    UpdateUserForm,
    UpdateUserFormFromJSON,
    UpdateUserFormToJSON,
    UpdateUserFormAdmin,
    UpdateUserFormAdminFromJSON,
    UpdateUserFormAdminToJSON,
    UserDto,
    UserDtoFromJSON,
    UserDtoToJSON,
} from '../models';

export interface CreateUserRequest {
    registerForm?: RegisterForm;
}

export interface DeleteUserRequest {
    id: number;
}

export interface GetUserRequest {
    id: number;
}

export interface LoginRequest {
    loginForm?: LoginForm;
}

export interface UpdateCurrentUserRequest {
    updateUserForm?: UpdateUserForm;
}

export interface UpdateUserRequest {
    id: number;
    updateUserFormAdmin?: UpdateUserFormAdmin;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     */
    async createUserRaw(requestParameters: CreateUserRequest): Promise<runtime.ApiResponse<UserDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterFormToJSON(requestParameters.registerForm),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     */
    async createUser(requestParameters: CreateUserRequest): Promise<UserDto> {
        const response = await this.createUserRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteUser(requestParameters: DeleteUserRequest): Promise<void> {
        await this.deleteUserRaw(requestParameters);
    }

    /**
     */
    async getCurrentUserRaw(): Promise<runtime.ApiResponse<UserDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Users/Current`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     */
    async getCurrentUser(): Promise<UserDto> {
        const response = await this.getCurrentUserRaw();
        return await response.value();
    }

    /**
     */
    async getUserRaw(requestParameters: GetUserRequest): Promise<runtime.ApiResponse<UserDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     */
    async getUser(requestParameters: GetUserRequest): Promise<UserDto> {
        const response = await this.getUserRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getUsersRaw(): Promise<runtime.ApiResponse<Array<UserDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserDtoFromJSON));
    }

    /**
     */
    async getUsers(): Promise<Array<UserDto>> {
        const response = await this.getUsersRaw();
        return await response.value();
    }

    /**
     */
    async loginRaw(requestParameters: LoginRequest): Promise<runtime.ApiResponse<LoginResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Users/Login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginFormToJSON(requestParameters.loginForm),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResultFromJSON(jsonValue));
    }

    /**
     */
    async login(requestParameters: LoginRequest): Promise<LoginResult> {
        const response = await this.loginRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async updateCurrentUserRaw(requestParameters: UpdateCurrentUserRequest): Promise<runtime.ApiResponse<UserDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Users/Current`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserFormToJSON(requestParameters.updateUserForm),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     */
    async updateCurrentUser(requestParameters: UpdateCurrentUserRequest): Promise<UserDto> {
        const response = await this.updateCurrentUserRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async updateUserRaw(requestParameters: UpdateUserRequest): Promise<runtime.ApiResponse<UserDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserFormAdminToJSON(requestParameters.updateUserFormAdmin),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDtoFromJSON(jsonValue));
    }

    /**
     */
    async updateUser(requestParameters: UpdateUserRequest): Promise<UserDto> {
        const response = await this.updateUserRaw(requestParameters);
        return await response.value();
    }

}
