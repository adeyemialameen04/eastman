interface Weight {
  netWeight: string;
  grossWeight: string;
}

interface Component {
  name: string;
  packedSeparately?: boolean;
  singlePacking?: boolean;
  capacityRange?: string;
  measurements: string;
  weight: Weight;
}

interface ContainerCapacity {
  "20feet": number;
  "40feet": number;
}

interface DialPoles {
  quantity: number;
  packingType: string;
  measurements: string;
  weight: Weight;
}

interface FD150kg {
  dialPoles: DialPoles;
  platform: Component;
  containerCapacity: ContainerCapacity;
}

interface Specification {
  model: string;
  maxCapacity: string[];
  minCapacity: string[];
  graduation: string[];
}

export interface TwoDialsPlatformScaleSchema {
  productName: string;
  img: string;
  modelNumber: string;
  components: Component[];
  containerCapacity: ContainerCapacity;
  FD150kg: FD150kg;
  specifications: Specification[];
}
