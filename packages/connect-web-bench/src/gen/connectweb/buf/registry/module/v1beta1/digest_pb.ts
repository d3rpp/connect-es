// Copyright 2021-2024 The Connect Authors
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

// @generated by protoc-gen-es v1.10.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/registry/module/v1beta1/digest.proto (package buf.registry.module.v1beta1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The type of Digest.
 *
 * @generated from enum buf.registry.module.v1beta1.DigestType
 */
export enum DigestType {
  /**
   * @generated from enum value: DIGEST_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The b4 digest function.
   *
   * @generated from enum value: DIGEST_TYPE_B4 = 1;
   */
  B4 = 1,

  /**
   * The b5 digest function.
   *
   * @generated from enum value: DIGEST_TYPE_B5 = 2;
   */
  B5 = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(DigestType)
proto3.util.setEnumType(DigestType, "buf.registry.module.v1beta1.DigestType", [
  { no: 0, name: "DIGEST_TYPE_UNSPECIFIED" },
  { no: 1, name: "DIGEST_TYPE_B4" },
  { no: 2, name: "DIGEST_TYPE_B5" },
]);

/**
 * A digest of a Commit's content.
 *
 * A digest represents all content for a single Commit, including its .proto files, documentation
 * files, license files, and the digests of its dependencies.
 *
 * @generated from message buf.registry.module.v1beta1.Digest
 */
export class Digest extends Message<Digest> {
  /**
   * The type of the Digest.
   *
   * @generated from field: buf.registry.module.v1beta1.DigestType type = 1;
   */
  type = DigestType.UNSPECIFIED;

  /**
   * The value of the Digest.
   *
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<Digest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.Digest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(DigestType) },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Digest {
    return new Digest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Digest {
    return new Digest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Digest {
    return new Digest().fromJsonString(jsonString, options);
  }

  static equals(a: Digest | PlainMessage<Digest> | undefined, b: Digest | PlainMessage<Digest> | undefined): boolean {
    return proto3.util.equals(Digest, a, b);
  }
}

