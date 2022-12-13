import {
  GetHost200Response,
  GetAllVMsList200Response,
  GetVMByVMId200Response,
  GetVMPowerByVMId200Response,
  PostCreateNewVM200Response,
  PatchUpdateVMByVMId200Response,
} from '@api-hooks/v1/@types';
import { apiClient } from '@lib/apiClient';
import schema from '@openapi-spec/v1.json';

import { restPost, restGet, restPatch } from './handlerFactory';

export const HANDLERS = {
  PostCreateNewVM: {
    success: restPost(apiClient.api.v1.vms, (_, res, ctx) => {
      const example = schema.components.responses.PostCreateNewVM200Response.content['application/json'].examples[
        'example-1'
      ].value as PostCreateNewVM200Response;
      return res(ctx.json(example));
    }),
  },
  GetHost: {
    success: restGet(apiClient.api.v1.host, (_, res, ctx) => {
      const example = schema.components.responses.GetHost200Response.content['application/json'].examples['example-1']
        .value as GetHost200Response;
      return res(ctx.json(example));
    }),
  },
  GetAllVMsList: {
    success: restGet(apiClient.api.v1.vms, (_, res, ctx) => {
      const example = schema.components.responses.GetAllVMsList200Response.content['application/json'].examples[
        'example-1'
      ].value as GetAllVMsList200Response;
      return res(ctx.json(example));
    }),
  },
  GetVMByVMId: {
    success: restGet(
      apiClient.api.v1.vms._vmId(
        schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
          .vms[0].metadata.id
      ),
      (_, res, ctx) => {
        const example = schema.components.responses.GetVMByVMId200Response.content['application/json'].examples[
          'example-1'
        ].value as GetVMByVMId200Response;
        return res(ctx.json(example));
      }
    ),
  },
  GetVMPowerByVMId1: {
    success: restGet(
      apiClient.api.v1.vms._vmId(
        schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
          .vms[0].metadata.id
      ).power,
      (_, res, ctx) => {
        const example = schema.components.responses.GetVMPowerByVMId200Response.content['application/json'].examples[
          'example-1'
        ].value as GetVMPowerByVMId200Response;
        return res(ctx.json(example));
      }
    ),
  },
  GetVMPowerByVMId2: {
    success: restGet(
      apiClient.api.v1.vms._vmId(
        schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
          .vms[1].metadata.id
      ).power,
      (_, res, ctx) => {
        const example = schema.components.responses.GetVMPowerByVMId200Response.content['application/json'].examples[
          'example-1'
        ].value as GetVMPowerByVMId200Response;
        return res(ctx.json(example));
      }
    ),
  },
  PatchUpdateVMByVMId200Response: {
    success: restPatch(
      apiClient.api.v1.vms._vmId(
        schema.components.responses.GetAllVMsList200Response.content['application/json'].examples['example-1'].value
          .vms[0].metadata.id
      ),
      (_, res, ctx) => {
        const example = schema.components.responses.PatchUpdateVMByVMId200Response.content['application/json'].examples[
          'example-1'
        ].value as PatchUpdateVMByVMId200Response;
        return res(ctx.json(example));
      }
    ),
  },
};
