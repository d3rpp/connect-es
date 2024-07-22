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

// @generated by protoc-gen-connect-es v1.4.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/registry/module/v1beta1/graph_service.proto (package buf.registry.module.v1beta1, syntax proto3)
/* eslint-disable */

import { GetGraphRequest, GetGraphResponse } from "./graph_service_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";

/**
 * Get dependency graphs.
 *
 * @generated from service buf.registry.module.v1beta1.GraphService
 */
export const GraphService = {
  typeName: "buf.registry.module.v1beta1.GraphService",
  methods: {
    /**
     * Get a dependency graph that includes the given Commits.
     *
     * Commits will be resolved via the given ResourceRefs, and all Commits will be included in the
     * graph, along with their dependencies.
     *
     * A dependency graph is a directed acyclic graph.
     *
     * @generated from rpc buf.registry.module.v1beta1.GraphService.GetGraph
     */
    getGraph: {
      name: "GetGraph",
      I: GetGraphRequest,
      O: GetGraphResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
  }
} as const;

