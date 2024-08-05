import { ballast_louver_fitting } from "./ballast-louver-fitting";
import {
  pipe_fittings,
  water_supply_pipe_fittings,
} from "./electricals-hardware/drainage-pipe-fittings";
import { conduit } from "./electricals-hardware/emt-imc";
import { conduit_2 } from "./electricals-hardware/emt-imc-fitted";
import { metal_box } from "./electricals-hardware/metal-box";
import { pvc_accessories } from "./electricals-hardware/pvc-accessories";
import {
  pipe_accessories,
  pvc_pipe,
  pvc_pipe_fittings,
} from "./electricals-hardware/pvc-pipe";
import { pvcTrunking } from "./electricals-hardware/pvc-trunking";

export const electricals_hardware = [
  {
    label: "Ballast Louver Fitting",
    type: "image_table",
    pagination: true,
    data: ballast_louver_fitting,
  },
  {
    label: "Pvc Trunking",
    type: "image_table",
    pagination: true,
    data: pvcTrunking,
  },
  {
    label: "Trunking accessories",
    type: "image_table",
    pagination: true,
    data: pvc_accessories,
  },
  {
    label: "Pvc Pipe",
    type: "image_table",
    pagination: true,
    data: pvc_pipe,
  },
  {
    label: "PVC Pipe Fittings",
    type: "image_table",
    pagination: true,
    data: pvc_pipe_fittings,
  },
  {
    label: "Pipe Accessories",
    type: "image_table",
    pagination: true,
    data: pipe_accessories,
  },
  {
    label: "drianage-pipe-fittings",
    type: "image_table",
    pagination: false,
    data: pipe_fittings,
  },
  {
    label: "Water Supply Pipe & Fittings",
    type: "image_table",
    pagination: false,
    data: water_supply_pipe_fittings,
  },
  {
    label: "Conduit Emt Imc",
    type: "image_table",
    pagination: false,
    data: conduit,
  },
  {
    label: "Conduit (Emt & Imc) Fittings",
    type: "image_table",
    pagination: false,
    data: conduit_2,
  },
  {
    label: "Metal Box",
    type: "",
    pagination: false,
    data: metal_box,
  },
];
