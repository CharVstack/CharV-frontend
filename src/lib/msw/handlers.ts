import {
  GetHost200Response,
  GetAllVMsList200Response,
  GetVMByVMId200Response,
  GetVMPowerByVMId200Response,
  PostCreateNewVM200Response,
  PatchUpdateVMByVMId200Response,
  PatchUpdateVMRequest,
  PostCreateNewVMRequest,
} from '@api-hooks/v1/@types';
import { apiClient } from '@lib/apiClient';
import schema from '@openapi-spec/v1.json';

import { restPost, restGet, restPatch, restDelete } from './handlerFactory';

const vms = schema.components.responses.GetAllVMsList200Response.content['application/json'].examples[
  'example-1'
].value.vms.map((vm) => vm);
const apiVersion = schema.info.version;

export const HANDLERS = {
  PostCreateNewVM: {
    success: restPost(apiClient.api.v1.vms, async (req, res, ctx) => {
      const example = schema.components.responses.PostCreateNewVM200Response.content['application/json'].examples[
        'example-1'
      ].value as PostCreateNewVM200Response;
      const reqBody = await req.json<PostCreateNewVMRequest>().then((data) => data);
      return res(
        ctx.json({ vm: { ...example.vm, metadata: { api_version: apiVersion, id: crypto.randomUUID() }, ...reqBody } })
      );
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
    success: vms.map((vm) =>
      restGet(apiClient.api.v1.vms._vmId(vm.metadata.id), (_, res, ctx) => {
        const example = schema.components.responses.GetVMByVMId200Response.content['application/json'].examples[
          'example-1'
        ].value as GetVMByVMId200Response;
        return res(ctx.json(example));
      })
    ),
  },
  GetVMPowerByVMId: {
    success: vms.map((vm) =>
      restGet(apiClient.api.v1.vms._vmId(vm.metadata.id).power, (_, res, ctx) => {
        const example = schema.components.responses.GetVMPowerByVMId200Response.content['application/json'].examples[
          'example-1'
        ].value as GetVMPowerByVMId200Response;
        return res(ctx.json(example));
      })
    ),
  },
  PatchUpdateVMByVMId200Response: {
    success: vms.map((vm) =>
      restPatch(apiClient.api.v1.vms._vmId(vm.metadata.id), async (req, res, ctx) => {
        const example = schema.components.responses.PatchUpdateVMByVMId200Response.content['application/json'].examples[
          'example-1'
        ].value as PatchUpdateVMByVMId200Response;
        const resBody = await req.json<PatchUpdateVMRequest>().then((data) => ({ vm: { ...example.vm, ...data } }));
        return res(ctx.json(resBody));
      })
    ),
  },
  PostVMPowerActionByVMIdResponse: {
    success: vms.map((vm) =>
      restPost(apiClient.api.v1.vms._vmId(vm.metadata.id).power, (_, res, ctx) => res(ctx.status(204)))
    ),
  },
  DeleteVmByVMIdResponse: {
    success: vms.map((vm) =>
      restDelete(apiClient.api.v1.vms._vmId(vm.metadata.id), (_, res, ctx) => res(ctx.status(204)))
    ),
  },
};
