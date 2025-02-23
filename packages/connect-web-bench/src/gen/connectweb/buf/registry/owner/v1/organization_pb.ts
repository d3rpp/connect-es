// Copyright 2021-2025 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file buf/registry/owner/v1/organization.proto (package buf.registry.owner.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_registry_priv_extension_v1beta1_extension } from "../../priv/extension/v1beta1/extension_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/owner/v1/organization.proto.
 */
export const file_buf_registry_owner_v1_organization: GenFile = /*@__PURE__*/
  fileDesc("CihidWYvcmVnaXN0cnkvb3duZXIvdjEvb3JnYW5pemF0aW9uLnByb3RvEhVidWYucmVnaXN0cnkub3duZXIudjEi9QIKDE9yZ2FuaXphdGlvbhIXCgJpZBgBIAEoCUILukgIyAEBcgOIAgESNwoLY3JlYXRlX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQga6SAPIAQESNwoLdXBkYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQga6SAPIAQESNQoEbmFtZRgEIAEoCUInukgkyAEBch8QAhggMhleW2Etel1bYS16MC05LV0qW2EtejAtOV0kEh0KC2Rlc2NyaXB0aW9uGAUgASgJQgi6SAVyAxjeAhIbCgN1cmwYBiABKAlCDrpIC9gBAXIGGP8BiAEBEl8KE3ZlcmlmaWNhdGlvbl9zdGF0dXMYByABKA4yNS5idWYucmVnaXN0cnkub3duZXIudjEuT3JnYW5pemF0aW9uVmVyaWZpY2F0aW9uU3RhdHVzQgu6SAjIAQGCAQIQAToG6sUrAhABIncKD09yZ2FuaXphdGlvblJlZhIWCgJpZBgBIAEoCUIIukgFcgOIAgFIABI0CgRuYW1lGAIgASgJQiS6SCFyHxACGCAyGV5bYS16XVthLXowLTktXSpbYS16MC05XSRIADoG6sUrAggBQg4KBXZhbHVlEgW6SAIIASrhAQoeT3JnYW5pemF0aW9uVmVyaWZpY2F0aW9uU3RhdHVzEjAKLE9SR0FOSVpBVElPTl9WRVJJRklDQVRJT05fU1RBVFVTX1VOU1BFQ0lGSUVEEAASLworT1JHQU5JWkFUSU9OX1ZFUklGSUNBVElPTl9TVEFUVVNfVU5WRVJJRklFRBABEi0KKU9SR0FOSVpBVElPTl9WRVJJRklDQVRJT05fU1RBVFVTX1ZFUklGSUVEEAISLQopT1JHQU5JWkFUSU9OX1ZFUklGSUNBVElPTl9TVEFUVVNfT0ZGSUNJQUwQA0JNWktidWYuYnVpbGQvZ2VuL2dvL2J1ZmJ1aWxkL3JlZ2lzdHJ5L3Byb3RvY29sYnVmZmVycy9nby9idWYvcmVnaXN0cnkvb3duZXIvdjFiBnByb3RvMw", [file_buf_registry_priv_extension_v1beta1_extension, file_buf_validate_validate, file_google_protobuf_timestamp]);

/**
 * Organization is an organization on the BSR.
 *
 * A name uniquely identifies an Organization, however name is mutable.
 *
 * @generated from message buf.registry.owner.v1.Organization
 */
export type Organization = Message<"buf.registry.owner.v1.Organization"> & {
  /**
   * The id for the Organization.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The time the Organization was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * The last time the Organization was updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * The name of the Organization.
   *
   * A name uniquely identifies an Organization, however name is mutable.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * The configurable description of the Organization.
   *
   * @generated from field: string description = 5;
   */
  description: string;

  /**
   * The configurable URL that represents the homepage for an Organization.
   *
   * @generated from field: string url = 6;
   */
  url: string;

  /**
   * The verification status of the Organization.
   *
   * @generated from field: buf.registry.owner.v1.OrganizationVerificationStatus verification_status = 7;
   */
  verificationStatus: OrganizationVerificationStatus;
};

/**
 * Describes the message buf.registry.owner.v1.Organization.
 * Use `create(OrganizationSchema)` to create a new message.
 */
export const OrganizationSchema: GenMessage<Organization> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization, 0);

/**
 * OrganizationRef is a reference to an Organization, either an id or a name.
 *
 * This is used in requests.
 *
 * @generated from message buf.registry.owner.v1.OrganizationRef
 */
export type OrganizationRef = Message<"buf.registry.owner.v1.OrganizationRef"> & {
  /**
   * @generated from oneof buf.registry.owner.v1.OrganizationRef.value
   */
  value: {
    /**
     * The id of the Organization.
     *
     * @generated from field: string id = 1;
     */
    value: string;
    case: "id";
  } | {
    /**
     * The name of the Organization.
     *
     * @generated from field: string name = 2;
     */
    value: string;
    case: "name";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message buf.registry.owner.v1.OrganizationRef.
 * Use `create(OrganizationRefSchema)` to create a new message.
 */
export const OrganizationRefSchema: GenMessage<OrganizationRef> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization, 1);

/**
 * The verification status of an Organization.
 *
 * @generated from enum buf.registry.owner.v1.OrganizationVerificationStatus
 */
export enum OrganizationVerificationStatus {
  /**
   * @generated from enum value: ORGANIZATION_VERIFICATION_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The Organization is unverified.
   *
   * @generated from enum value: ORGANIZATION_VERIFICATION_STATUS_UNVERIFIED = 1;
   */
  UNVERIFIED = 1,

  /**
   * The Organization is verified.
   *
   * @generated from enum value: ORGANIZATION_VERIFICATION_STATUS_VERIFIED = 2;
   */
  VERIFIED = 2,

  /**
   * The Organization is an official organization of the BSR owner.
   *
   * @generated from enum value: ORGANIZATION_VERIFICATION_STATUS_OFFICIAL = 3;
   */
  OFFICIAL = 3,
}

/**
 * Describes the enum buf.registry.owner.v1.OrganizationVerificationStatus.
 */
export const OrganizationVerificationStatusSchema: GenEnum<OrganizationVerificationStatus> = /*@__PURE__*/
  enumDesc(file_buf_registry_owner_v1_organization, 0);

