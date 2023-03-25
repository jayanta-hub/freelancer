// import "./styles.css";

// import { WUButton, WUCheckbox, WUIcon, WUTextField } from "@wuds/web"
// import { Overlay } from "react-portal-overlay"
// import React, { useEffect, useState } from 'react';
// export default function App() {

// const rights = [
//     {
//         "category": "Notifications_settings",
//         "right": [
//             "Remove notification",
//             "Create new notification",
//             "View list of notifications settings",
//             "Modify notification"
//         ]
//     },
//     {
//         "category": "Customer_accounts",
//         "right": [
//             "Reset customer's security questions",
//             "Edit customer's account",
//             "Verify customer's account",
//             "In Admin panel make additional queue \\\"Blocked queue\\\"",
//             "Change account status (active/block)",
//             "Manage beneficiaries",
//             "View list of all customer profiles",
//             "Delete customer's account",
//             "View customer's account",
//             "Reset customer's password",
//             "View list of customer profiles",
//             "Look Up + view customers account",
//             "Verify sanction list customer's account",
//             "Update hyperband eligibility, source of funds documents flags"
//         ]
//     },
//     {
//         "category": "Users",
//         "right": [
//             "Setup limits",
//             "Upload BIN .csv file",
//             "View merchant settings",
//             "Ability to modify Send Money Options",
//             "Preview users roles",
//             "Create new Agent account",
//             "Agent API secret key never expires",
//             "Suspend Agent account",
//             "View or Edit Hosted platform settings",
//             "Add new roles",
//             "Modify email in Agent account",
//             "Preview WU admins roles",
//             "Remove Agent account",
//             "View list of sent SMS and emails",
//             "Edit merchant settings",
//             "Remove roles",
//             "Modify Agent account",
//             "View list of Agent profiles",
//             "Edit system merchant settings",
//             "View Agent profile details",
//             "Re-enable Agent account",
//             "Edit WU admins roles",
//             "View list of WU admins roles",
//             "View list of Agent roles"
//         ]
//     },
//     {
//         "category": "Compliance",
//         "right": [
//             "Upload sanction list",
//             "Add new sanction",
//             "Remove sanction",
//             "View list of local sanctions",
//             "Download sanction list"
//         ]
//     },
//     {
//         "category": "Api",
//         "right": [
//             "View subscription based API configuration parameters",
//             "Call API customers.ekyc.idm-update",
//             "Access to Agent API panel",
//             "Call API customers.ekyc.status-update",
//             "Modify subscription based API configuration parameters"
//         ]
//     },
//     {
//         "category": "Locations",
//         "right": [
//             "Modify location",
//             "View list of locations",
//             "Add new location",
//             "Remove location"
//         ]
//     },
//     {
//         "category": "Transactions",
//         "right": [
//             "Accept/Reject transaction in Fraud Manual Queue",
//             "Accept/Reject transaction in Compliance Manual Queue",
//             "Accept/Reject transaction in Operations Manual Queue",
//             "Download reconciliation queue",
//             "View transactions history",
//             "Ability to use the “Refund to QPay” button",
//             "Ability to Refund transaction in Refund queue",
//             "Accept/Reject transaction in Manual Queue",
//             "Ability to Extract transactions history report",
//             "Ability to reconcile transaction",
//             "Accept/Reject transaction in All transactions Queue",
//             "Ability to extract Name mod. requests report",
//             "View list of reconcilation queue",
//             "Preview transaction details",
//             "View list of refund queue",
//             "Upload reconciliation queue"
//         ]
//     },
//     {
//         "category": "Gateway_Error_Mapping",
//         "right": [
//             "Import / Export Gateway Error",
//             "Remove Gateway Error",
//             "Access PP Error Mapping",
//             "View list of Gateway Errors",
//             "Modify Gateway Error",
//             "Add new Gateway Error"
//         ]
//     },
//     {
//         "category": "Reports",
//         "right": [
//             "Ability to Extract customers accounts reports (EKYC)",
//             "Ability to Extract customers accounts reports (Registration)",
//             "Ability to Extract customers accounts reports (T&C Acceptance)",
//             "Ability to Extract customers accounts reports (UCD)",
//             "Ability to Extract settlement report",
//             "Ability to Extract location report"
//         ]
//     },
//     {
//         "category": "Access_rights",
//         "right": [
//             "Remove access right",
//             "View list of access rights",
//             "Modify access right",
//             "Add new access right"
//         ]
//     },
//     {
//         "category": "Other_rights",
//         "right": [
//             "Add/Modify FAQ"
//         ]
//     },
//     {
//         "category": "Emergency_banners",
//         "right": [
//             "Add new Emergency banner",
//             "Modify Emergency banner",
//             "Remove Emergency banner",
//             "View list of Emergency banners"
//         ]
//     },
//     {
//         "category": "Web_vs_Mobile_split_report",
//         "right": [
//             "Ability to Extract Web vs Mobile report"
//         ]
//     },
//     {
//         "category": "Automatic_communication",
//         "right": [
//             "Modify and preview automatic communication data"
//         ]
//     },
//     {
//         "category": "Content",
//         "right": [
//             "Modify/Import/Export content"
//         ]
//     },
//     {
//         "category": "Event_logging",
//         "right": [
//             "Ability to Extract portal logs",
//             "Ability to Extract Content changes logs"
//         ]
//     },
//     {
//         "category": "WU_reports",
//         "right": [
//             "Ability to Extract Western Union report"
//         ]
//     }
// ]

// export const AddRoleModal = (props) => {
//     const fetchAvailableRights = () => {
//         const res = Array.from(props.availableRights?.reduce((m, { category, right }) =>
//             m.set(category, [...(m.get(category) || []), right]), new Map
//         ), ([category, right]) => ({ category, right })
//         );
//         return res;
//     }

//      const getUniqueListBy =(arr) => {  
//         var results = Object.values(arr.reduce((custs, { category,right }) => {
//           var customer = custs[category]
//           if (!customer) {
//             custs[category] = {
//               category:category,
//               right: [...right]
//             }
//           } 
//           return custs
//         }, {}))
//         return results;
//         }

//     const initRoleDetails: roleDetails = {}
//     initRoleDetails["roleName"] = "";
//     initRoleDetails["roleDescription"] = "";
//     const rightsList = fetchAvailableRights()
//     const [availableRights, setAvailableRights] = useState(fetchAvailableRights())
//     const [selectedRights, setSelectedRights] = useState<any>([])
//     const [searchedAvailableRight,setSearchedAvailableRight] = useState<any>([])
//     const [searchedSelectedRight,setSearchedSelectedRight] = useState<any>([])
//     const [search, setSearch] = useState('')
//     const [checkedAvailableRight, setCheckedAvailableRight] = useState<any>([])
//     const [checkedSelectedRight, setCheckedSelectedRight] = useState<any>([])
//     const [roleDetails, setRoleDetails] = useState(initRoleDetails)
//     const fromViewRole = props.isEditRoleModal ? props.selectedData['wuRole'] : false
//     const [checkboxValue, setCheckedValue] = useState<boolean>(fromViewRole)
//     const roleForm = new WUForm();
//     const dispatch = useDispatch();

//     let availableRightsList = [...availableRights,...searchedAvailableRight]
//     let finalAvailableRightsList: any = getUniqueListBy(availableRightsList)
//     let selectedRightsList = [...selectedRights,...searchedSelectedRight]
//     let finalSelectedRights = getUniqueListBy(selectedRightsList)

//     const isSearchOrNotAvailable = search.length>0 ?searchedAvailableRight:finalAvailableRightsList
//     const isSearchOrNotSelected = search.length>0?searchedSelectedRight:finalSelectedRights
//     roleForm.addField('roleName', 'roleName');
//     roleForm.addField('roleDescription', 'roleDescription');
//     roleForm.addField('search_term', 'search_term')


//     const handleRoleDetails = (e: any, key: string) => {
//         setRoleDetails({ ...roleDetails, [key]: e.getValue() })
//     }
 


//     const getRightNameForRights =(rightsArray) =>{
//      let rights =  rightsArray?.map((data) => {
//             return data.right?.map((item) => {
//                 return item
//             })
//         })
//         return rights
//     }

//     const handleOnSave = () => {
//         let rights = getRightNameForRights(selectedRights)
//         let addRoleInput = {
//             roleName: roleDetails.roleName,
//             description: roleDetails.roleDescription,
//             country: getAppCountry(),
//             rights: (rights.flat()).toString(),
//             wuRole: checkboxValue
//         }
//         let editRoleInput = {
//             roleName: roleDetails.roleName ? roleDetails.roleName : props.selectedData['roleName'],
//             description: roleDetails.roleDescription ? roleDetails.roleDescription : props.selectedData['description'],
//             country: getAppCountry(),
//             rights: (rights.flat()).toString(),
//             id: props.selectedData['id'],
//             wuRole: checkboxValue
//         }
//         if (props.isEditRoleModal) {
//             dispatch(editRoleInit(editRoleInput, props.selectedRowIndex))
//             props.closeModal()
//         }
//         else {
//             if (selectedRights.length === 0) {
//                 showToastTip(strings("addRoles.selectedRightsCheck"), WUConstants.Toast.ERROR)
//             }
//             else if (roleDetails.roleName) {
//                 dispatch(addRoleInit(addRoleInput))
//                 props.closeModal()
//             }
//             else {
//                 showToastTip(strings("addRoles.addRoleFailure"), WUConstants.Toast.ERROR)
//             }
//         }

//     }

//     const cancelUser = () => {
//         props.closeModal();
//     }

//     const transformAvailableRights = (rightsArray, selectedData) => {
//         rightsArray.map((rightObj) => {
//             let newRights = [];
//             rightObj.right.map((rightStr) => {
//                 if (!selectedData?.includes(rightStr)) {
//                     newRights.push(rightStr);
//                 }
//             });
//             rightObj.right = newRights;
//         });
//         return rightsArray;
//     };


//     const transformSelectedRights = (rightsArray, selectedData) => {
//         rightsArray?.forEach((category) => {
//             const currentRights = [];
//             category.right?.map((subRight) => {
//                 if (selectedData?.includes(subRight)) {
//                     currentRights.push(subRight);
//                 }
//             });
//             category.right = currentRights;
//         });
//         return rightsArray
//     }



//     const handleSearch = (inputData: any, searchItem: string) => {
//         let searchedData = []
//         inputData.map((obj) => {
//             let searchItems = {}
//             obj?.right?.map((subObj) => {
//                 if (subObj?.toUpperCase().includes(searchItem?.toUpperCase())) {
//                     if (!searchItems["category"]) {
//                         searchItems["category"] = obj.category
//                     }
//                     if (searchItems["right"]) {
//                         searchItems["right"].push(subObj)
//                     }
//                     else {
//                         searchItems["right"] = [subObj]
//                     }
//                 }
//             })
//             if(searchItems["right"]){
//             searchedData.push(searchItems)
//             }
//         })
//         return searchedData
//     }

//     const onSearchHandler = (e:any) => {
//         setSearch(e.getValue())
//         let searchItem = e.getValue()
//         let availableRightsLists = (getRightNameForRights(selectedRights)?.flat()).toString()
//         let rights = transformAvailableRights(availableRights,availableRightsLists)
//         let availableRightsList = [...rights,...searchedAvailableRight]
//         let finalAvailableRightsList: any = getUniqueListBy(availableRightsList)
//         let selectedRightsList = [...selectedRights,...searchedSelectedRight]
//         let finalSelectedRights = getUniqueListBy(selectedRightsList)
//         if(searchItem.length === 0){
//         setAvailableRights(finalAvailableRightsList)
//         setSelectedRights(finalSelectedRights)
//         }
//         let availableData = handleSearch(finalAvailableRightsList, searchItem)
//         let selectedData = handleSearch(finalSelectedRights,searchItem)
//         setSearchedAvailableRight([...availableData])
//         setSearchedSelectedRight([...selectedData])
//     }

//     const handleAddOrRemoveRights = (isLeftClick: boolean) => {
        
//         let sender = isLeftClick ? [...isSearchOrNotAvailable] : [...isSearchOrNotSelected]
//         let receiver = isLeftClick ? [...isSearchOrNotSelected] : [...isSearchOrNotAvailable]

//         const objIndex = isLeftClick ? checkedAvailableRight?.objIndex : checkedSelectedRight?.objIndex
//         const subObjIndex = isLeftClick ? checkedAvailableRight?.subObjIndex : checkedSelectedRight?.subObjIndex


//         let receiverIndex = receiver?.findIndex((selectedObj) => selectedObj?.category === objIndex);
//         let receiverSubIndex = receiver[receiverIndex]?.right?.findIndex((selectedSubObj) => selectedSubObj === subObjIndex)

//         let senderIndex = sender?.findIndex((selectedObj) => selectedObj.category === objIndex);
//         let senderSubIndex = sender[senderIndex]?.right.findIndex((selectedSubObj) => selectedSubObj === subObjIndex)

//         if (receiverSubIndex > -1) {
//             return;
//         }

//         let isFound = receiverIndex !== -1;
//         if (isFound) {
//             receiver[receiverIndex]?.right.push(sender[senderIndex]?.right[senderSubIndex]);
//         }
//         else {
//             let newObj = {
//                 category: sender[senderIndex]?.category,
//                 isAvailableExpanded: false,
//                 isSelectedExpanded: false,
//                 right: [sender[senderIndex]?.right[senderSubIndex]]
//             }
//             receiver.push(newObj)
//         }

//         sender[senderIndex]?.right?.splice(senderSubIndex, 1)
//         if (sender[senderIndex]?.right?.length === 0) {
//             sender?.splice(senderIndex, 1)
//         }

//         if (isLeftClick) {
//              if(search.length>0){
//                 setSearchedAvailableRight(sender)
//                 setCheckedAvailableRight(null)
//                 setSearchedSelectedRight(receiver)
//              }
//              else{
//                 setAvailableRights(sender)
//                 setSelectedRights(receiver)
//                 setCheckedAvailableRight(null)
//              }
           
//         }
//         else {
//             if(search.length>0){               
//                 setSearchedAvailableRight(receiver)
//                 setSearchedSelectedRight(sender)
//                 setCheckedSelectedRight(null)
//              }
//              else{
//                 setSelectedRights(sender)
//                 setAvailableRights(receiver)
//                 setCheckedSelectedRight(null)
//              }
//         }
//     }

//     const handleClick = (objIndex, subObjIndex, isLeftClick) => {
//         const indicesObj = {
//             objIndex: objIndex,
//             subObjIndex: subObjIndex
//         }
//         if (isLeftClick) {
//             //Toggle Same index For AvailableRights
//             if (checkedAvailableRight?.subObjIndex === indicesObj.subObjIndex) {
//                 setCheckedAvailableRight(null)
//             }
//             else {
//                 setCheckedAvailableRight(indicesObj)
//             }
//             setCheckedSelectedRight(null)

//         }
//         else {
//             //Toggle Same index For SelectedRights
//             if (checkedSelectedRight?.subObjIndex === indicesObj.subObjIndex) {
//                 setCheckedSelectedRight(null)
//             }
//             else {
//                 setCheckedSelectedRight(indicesObj)
//             }
//             setCheckedAvailableRight(null)
//         }
//     }

//     const renderAvailableOrSelectedRights = (baseRightData: any, checkedRightData: any, isLeftClick: boolean) => {
//          return baseRightData?.map((roleItem, roleIndex) => {
//                 return (
//                     <>
//                         <div style={{ bottom: '5px' }}>
//                             {(roleItem?.category?.length > 0 && roleItem?.right?.length > 0) &&
//                                 <div style={{ display: 'flex' }}>
//                                     <WUIcon name={roleItem.isAvailableExpanded || roleItem.isSelectedExpanded ? '0045_triangle-down' : '0044_triangle-up'} size={16} style={{ marginRight: '5px' }} onClick={() => handleToggle(baseRightData, roleIndex, isLeftClick)} />
//                                     <span className={styles.rightName}>{roleItem?.category}<br /></span>
//                                 </div>

//                             }

//                             <div style={{ paddingLeft: '40px' }}>
//                                 {!roleItem.isAvailableExpanded && roleItem?.right?.length > 0 && roleItem?.right?.map((subItem, subItemIndex) => {
//                                     return (
//                                         <div>
//                                            <div style={{background: roleItem?.category !== undefined? (roleItem?.category === checkedRightData?.objIndex && checkedRightData?.subObjIndex === subItem ? '#ffe433':'white'): 'white'}} className={styles.subListContainer}>
//                                            <span onClick={() => handleClick(roleItem.category, subItem, isLeftClick)} style={{ fontFamily: 'EuclidWU', fontSize: '16px', cursor: 'default'}}>{subItem}<br /></span>
//                                           </div>
//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     </>
//                 )
//         })
//     }

//     const handleToggle = (baseRightData, roleIndex, isLeftClick) => {
//         const roleItem = [...baseRightData]
//         if (roleItem[roleIndex]["isAvailableExpanded"]) {
//             roleItem[roleIndex]["isAvailableExpanded"] = false;
//         }
//         else {
//             roleItem[roleIndex]["isAvailableExpanded"] = true;
//         }

//         if (isLeftClick) {
//             setAvailableRights(roleItem)
//         }
//         else {
//             setSelectedRights(roleItem)
//         }
//     }

//     return (
//         <Overlay open={props.showModal} className={styles.overlayWrapper}>
//             <div className={styles.container} >
//                 <div className={styles.addRoleContainer}>
//                     <span className={styles.heading}>{props.isEditRoleModal ? strings("userRole.edit_role") : strings("userRole.add_new_role")}</span>
//                     <WUIcon name="0022_close" size={14} onClick={() => cancelUser()} />
//                 </div>
//                 <div className={styles.textFieldContainer}>
//                     <div className={styles.textInput}>
//                         <WUTextField
//                             id={'role_name'}
//                             inputProps={{
//                                 value: props.isEditRoleModal ? props.selectedData["roleName"] : roleDetails.roleName,
//                             }}
//                             label={strings("userRole.name")}
//                             onBlur={(e) => handleRoleDetails(e, "roleName")}
//                             validations={roleForm.getValidations('roleName')}
//                             labelStyle={{ fontFamily: 'EuclidWUMedium', fontSize: 16 }}
//                             subLabel=""
//                             removeMultipleSpaces={true}
//                             enable={props.isEditRoleModal ? false : true}
//                             maxLength={80}
//                         />
//                         <WUTextField
//                             id={'role_description'}
//                             inputProps={{
//                                 value: props.isEditRoleModal ? props.selectedData["description"] : roleDetails.roleDescription,
//                             }}
//                             validations={roleForm.getValidations('roleDescription')}
//                             onBlur={(e) => handleRoleDetails(e, "roleDescription")} ariaLabel={'Description'}
//                             label={strings("userRole.description")}
//                             labelStyle={{ fontFamily: 'EuclidWUMedium', fontSize: 16 }}
//                             removeMultipleSpaces={true}
//                             maxLength={30}
//                         />

//                     </div>
//                     <div style={{ width: '50%' }}>
//                         <div className={styles.parentCheckBoxContainer}>
//                             <WUCheckbox
//                                 label={strings("userRole.western_union_role")}
//                                 className={styles.checkBoxContainer}
//                                 fontSize={25}
//                                 checkboxSize={25}
//                                 labelStyle={{ fontFamily: 'EuclidWU', fontSize: 18, marginTop: '23px' }}
//                                 checkedValue={checkboxValue}
//                                 handleClick={() => setCheckedValue(!checkboxValue)}

//                             />
//                         </div>
//                     </div>
         

//                 <div style={{ display: 'flex'}}>
//                     <div style={{ width: '50%' }}>
//                         <div style={{ display: 'flex', flexDirection: 'row' }}>
//                             <span className={styles.availableRights}>{strings("userRole.available_rights")}</span>
//                             <WUTextField
//                                 id={'Available_Rights'}
//                                 inputProps={{
//                                     value: search,
//                                     required: false
//                                 }}
//                                 onChangeText={(e) => onSearchHandler(e)}
//                                 validations={roleForm.getValidations('search_term')}
//                                 labelStyle={{ fontFamily: 'EuclidWUMedium', fontSize: 16 }}
//                                 label={'Search'}
//                             />
//                         </div>
//                         <div className={styles.selectedRights}>
//                             <>
//                                {renderAvailableOrSelectedRights(isSearchOrNotAvailable, checkedAvailableRight, true)}
//                             </>
//                         </div>
//                     </div>
//                     <div className={styles.addOrRemoveRights}>
//                         <WUIcon name="0008_arrow-right" onClick={() => handleAddOrRemoveRights(true)} size={18} style={{ marginTop: '30px' }} />
//                         <WUIcon name="0007_arrow-left" onClick={() => handleAddOrRemoveRights(false)} style={{ marginTop: '30px' }} size={18} />
//                     </div>
//                     <div style={{ width: '40%', marginTop: '25px' }}>
//                         <span style={{ fontSize: '18px', fontFamily: 'EuclidWUMedium' }}>{strings("userRole.selected_rights")}</span>
//                         <div className={styles.selectedContainer}>
//                             {
//                                 <>
//                                     {renderAvailableOrSelectedRights(isSearchOrNotSelected,checkedSelectedRight,false)}
//                                 </>
//                             }

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </Overlay>
//     )
// }


//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
