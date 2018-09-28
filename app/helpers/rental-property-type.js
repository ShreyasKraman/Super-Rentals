import { helper } from '@ember/component/helper';

// export function rentalPropertyType(params/*, hash*/) {
//   return params;
// }

const communityPropertyType = [
'Condo',
'Apartment',
'Townhouse'
]

export function rentalPropertyType([propertyType]){
	if(communityPropertyType.includes(propertyType)){
		return 'Community';
	}

	return 'Standalone';

}



export default helper(rentalPropertyType);
