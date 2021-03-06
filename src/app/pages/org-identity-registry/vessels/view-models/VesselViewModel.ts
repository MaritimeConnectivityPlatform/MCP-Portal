import {Vessel} from "../../../../backend-api/identity-registry/autogen/model/Vessel";
import {VesselAttribute} from "../../../../backend-api/identity-registry/autogen/model/VesselAttribute";
import AttributeNameEnum = VesselAttribute.AttributeNameEnum;
import {EnumsHelper} from "../../../../shared/enums-helper";

export interface VesselAttributeViewModel extends VesselAttribute {
	attributeNameText?:string;
}

// TODO maybe this should just be a helper.service instead. Or mayby just static methods if no objects is needed
export class VesselViewModel {
	private attributes:Array<VesselAttributeViewModel>;
	private vessel:Vessel;
	constructor(vessel:Vessel) {
		this.vessel = vessel;
		this.generateAttributes();
	}

	public static getAllPossibleVesselAttributes(): Array<VesselAttributeViewModel> {
		let attributes:Array<VesselAttributeViewModel> = [];

		let attributeKeysAndValues = EnumsHelper.getKeysAndValuesFromEnum(AttributeNameEnum);
		attributeKeysAndValues.forEach(enumKeyAndValue => {
			let vesselAttribute:VesselAttributeViewModel = {
				attributeValue: '',
				attributeName: enumKeyAndValue.value,
				attributeNameText: VesselViewModel.getTextForVesselAttributeNameEnum(enumKeyAndValue.value)
			};
			attributes.push(vesselAttribute);
		});
		return attributes;
	}

	public static convertVesselsToViewModels(vessels:Array<Vessel>):Array<VesselViewModel> {
		let viewModels:Array<VesselViewModel> = [];
		if (vessels) {
			vessels.forEach(vessel => {
				viewModels.push(new VesselViewModel(vessel));
			});
		}
		return viewModels;
	}

	public getVessel():Vessel {
		return this.vessel;
	}

	public getAttributeViewModels():Array<VesselAttributeViewModel> {
		return this.attributes;
	}

	private generateAttributes() {
		this.attributes = [];
		if (this.vessel.attributes) {
			this.vessel.attributes.forEach(attribute => {
				this.attributes.push(this.attributeViewModelFromAttribute(attribute));
			});
		}
	}

	private attributeViewModelFromAttribute(attribute:VesselAttribute): VesselAttributeViewModel {
		let attributeViewModel: VesselAttributeViewModel = attribute;
		attributeViewModel.attributeNameText = VesselViewModel.getTextForVesselAttributeNameEnum(attribute.attributeName);
		return attributeViewModel;
	}


	private static getTextForVesselAttributeNameEnum(vesselAttributeEnum:AttributeNameEnum):string {
		var text = '';
		switch (vesselAttributeEnum) {
			case AttributeNameEnum.AisClass: {
				text = 'AIS class';
				break;
			}
			case AttributeNameEnum.Callsign: {
				text = 'Call sign';
				break;
			}
			case AttributeNameEnum.Flagstate: {
				text = 'Flag state';
				break;
			}
			case AttributeNameEnum.ImoNumber: {
				text = 'IMO number';
				break;
			}
			case AttributeNameEnum.MmsiNumber: {
				text = 'MMSI number';
				break;
			}
			case AttributeNameEnum.PortOfRegister: {
				text = 'Port of register';
				break;
			}
			default : {
				text = AttributeNameEnum[vesselAttributeEnum];
				if (!text) {
					text = ''+ vesselAttributeEnum;
				}
			}
		}
		return text;
	}

}