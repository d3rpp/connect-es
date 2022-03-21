/* eslint-disable */
// @generated by protoc-gen-connect-web v0.0.2-alpha.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/download.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
//
// Copyright 2020-2022 Buf Technologies, Inc.
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

import {DownloadRequest, DownloadResponse} from "./download_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * DownloadService is the download service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.DownloadService
 */
export const DownloadService = {
    typeName: "buf.alpha.registry.v1alpha1.DownloadService",
    methods: {
        /**
         * Download downloads.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.DownloadService.Download
         */
        download: {
            name: "Download",
            I: DownloadRequest,
            O: DownloadResponse,
            kind: MethodKind.Unary,
        },
    }
} as const;

