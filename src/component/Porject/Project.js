import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

const Project = () => {
  const [refresh, setRefresh] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [indivisualSelectedItem, setIndivisualSelectedItem] = useState([]);
  console.log(
    "🚀 ~ file: Project.js:13 ~ Project ~ indivisualSelectedItem:",
    selectedItem.filter(
      (data) => data?.catagory === indivisualSelectedItem.catagory,
    ),
  );
  const [apiData, setApiData] = useState([
    {
      id: 1,
      catagory: "Dog",
      right: [
        {
          id: 6,
          parentId: 1,
          name: "West Highland White Terrier",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 7,
          parentId: 1,
          name: "Rhodesian Ridgeback",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 8,
          parentId: 1,
          name: "Newfoundland",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 9,
          parentId: 1,
          name: "Basset Hound",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 10,
          parentId: 1,
          name: "Cavalier King Charles Spaniel",
          isAddChecked: false,
          isRemoveChecked: false,
        },
      ],
    },
    {
      id: 2,
      catagory: "Cat",
      right: [
        {
          id: 11,
          parentId: 2,
          name: "Devon Rex Cats",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 12,
          parentId: 2,
          name: "Abyssinian Cats",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 13,
          parentId: 2,
          name: "Sphynx Cats",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 14,
          parentId: 2,
          name: "Scottish Fold Cats",
          isAddChecked: false,
          isRemoveChecked: false,
        },
      ],
    },
    {
      id: 3,
      catagory: "Deer",
      right: [
        {
          id: 15,
          parentId: 3,
          name: "INDIAN CHEVROTAIN",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 16,
          parentId: 3,
          name: "HIMALAYAN MUSK DEER",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 17,
          parentId: 3,
          name: "INDIAN OR RED MUNTJAC",
          isAddChecked: false,
          isRemoveChecked: false,
        },
      ],
    },
  ]);
  let [childID, setChildID] = useState("");
  let [parentID, setParentID] = useState("");
  console.log("🚀 ~ file: Project.js:123 ~ Project ~ parentID:", parentID);
  const onClickHandler = (childId, parentId, item) => {
    setChildID(childId);
    setParentID(parentId);
    setIndivisualSelectedItem(item);
    let modifydata = apiData;
    modifydata?.map((data, index) => {
      data?.right?.map((item, ind) => {
        if (item.id === childId) {
          modifydata[index].right[ind]["isAddChecked"] = !item.isAddChecked;
        } else {
          modifydata[index].right[ind]["isAddChecked"] = false;
        }
      });
    });
    setApiData(modifydata);
    setRefresh(refresh + 1);
  };
  const onClickRightHandler = (childId, parentId) => {
    setChildID(childId);
    setParentID(parentId);
    let modifydata = selectedItem;
    modifydata?.map((data, index) => {
      data?.right?.map((item, ind) => {
        if (item.id === childId) {
          modifydata[index].right[ind]["isRemoveChecked"] =
            !item.isRemoveChecked;
        } else {
          modifydata[index].right[ind]["isRemoveChecked"] = false;
        }
      });
    });
    setSelectedItem(modifydata);
    setRefresh(refresh + 1);
  };
  const addHanlder = () => {
    const array = apiData.filter((item) => item.id === parentID);
    array.forEach((item, index) => {
      item?.right?.forEach((data, ini) => {
        if (data.isAddChecked) {
          if (
            selectedItem?.length > 0 &&
            item?.catagory === indivisualSelectedItem.catagory
          ) {
            selectedItem.forEach((item, ind) => {
              console.log("first", item);
              if (item?.id === data?.parentId) {
                console.log("2nd");
                selectedItem[ind].right.push(data);
                apiData.forEach((item, itemindex) => {
                  item?.right.forEach((api, apiindex) => {
                    if (
                      api.id === childID &&
                      apiData[itemindex]?.right.length > 0
                    ) {
                      apiData[itemindex]?.right?.splice(apiindex, 1);
                    }
                  });
                });
              } else {
                console.log("3rd");
                selectedItem.push({
                  id: array[ind]?.id,
                  catagory: array[ind]?.catagory,
                  right: [data],
                });
                apiData.map((item, itemindex) => {
                  item?.right.map((api, apiindex) => {
                    if (
                      api.id === childID &&
                      apiData[itemindex]?.right.length > 0
                    ) {
                      apiData[itemindex]?.right?.splice(apiindex, 1);
                    }
                  });
                });
              }
            });
          } else {
            console.log("4th");
            selectedItem.push({
              id: item?.id,
              catagory: item?.catagory,
              right: [data],
            });
            apiData.map((item, itemindex) => {
              item?.right.map((api, apiindex) => {
                if (
                  api.id === childID &&
                  apiData[itemindex]?.right.length > 0
                ) {
                  apiData[itemindex]?.right?.splice(apiindex, 1);
                }
              });
            });
          }
        }
      });
    });
    setRefresh(refresh + 1);
  };
  const RemoveHanlder = () => {
    const array = selectedItem.filter((item) => item.id === parentID);
    let finalData = [];
    array.forEach((item, index) => {
      item?.right?.filter((data, ini) => {
        if (data.isRemoveChecked) {
          if (apiData?.length > 0) {
            apiData.map((item, ind) => {
              if (item?.id === data?.parentId) {
                apiData[ind].right.push(data);
                selectedItem.map((item, itemindex) => {
                  item?.right.map((api, apiindex) => {
                    if (
                      api.id === childID &&
                      selectedItem[itemindex]?.right.length > 0
                    ) {
                      selectedItem[itemindex]?.right?.splice(apiindex, 1);
                    }
                  });
                });
              } else {
                apiData.push({
                  id: array[ind].id,
                  catagory: array[ind].catagory,
                  right: [data],
                });
                selectedItem.map((item, itemindex) => {
                  item?.right.map((api, apiindex) => {
                    if (
                      api.id === childID &&
                      selectedItem[itemindex]?.right.length > 0
                    ) {
                      selectedItem[itemindex]?.right?.splice(apiindex, 1);
                    }
                  });
                });
              }
            });
          } else {
            apiData.push({
              id: array[ini].id,
              catagory: array[ini].catagory,
              right: [data],
            });
            selectedItem.map((item, itemindex) => {
              item?.right.map((api, apiindex) => {
                if (
                  api.id === childID &&
                  selectedItem[itemindex]?.right.length > 0
                ) {
                  selectedItem[itemindex]?.right?.splice(apiindex, 1);
                }
              });
            });
          }
        }
      });
    });
    setRefresh(refresh + 1);
  };
  const RenderItem = ({ item, type }) => {
    return (
      <div key={item.id}>
        <div
          style={{
            background: "#FFFFFF",
          }}
        >
          {item?.right?.length !== 0 &&
            item?.right.filter((data) =>
              data.name.toLowerCase().includes(searchValue),
            ).length !== 0 && (
              <>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.catagory}
                </Typography>
                <Divider />
              </>
            )}
        </div>
        {item?.right
          .filter((data) => data.name.toLowerCase().includes(searchValue))
          ?.map((data, ind) => {
            return (
              <>
                <div
                  key={data.id}
                  onClick={() => {
                    onClickHandler(data.id, item.id, item);
                  }}
                  style={{
                    background: data.isAddChecked ? "#ebb434" : "FFFFFF",
                    marginLeft: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ListItem>
                    <ListItemText primary={data.name} />
                  </ListItem>
                  <Divider />
                </div>
              </>
            );
          })}
      </div>
    );
  };
  const RenderRightItem = ({ item, type }) => {
    return (
      <Box key={item.id}>
        <Box
          style={{
            background: "#FFFFFF",
          }}
        >
          {item?.right?.length !== 0 &&
            item?.right.filter((data) =>
              data.name.toLowerCase().includes(searchValue),
            ).length !== 0 && (
              <>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.catagory}
                </Typography>
                <Divider />
              </>
            )}
        </Box>
        {item?.right
          .filter((data) => data.name.toLowerCase().includes(searchValue))
          ?.map((data, ind) => {
            return (
              <>
                <Box
                  key={data.id}
                  onClick={() => {
                    onClickRightHandler(data.id, item.id);
                  }}
                  style={{
                    background: data.isRemoveChecked ? "#ebb434" : "FFFFFF",
                    marginLeft: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ListItem>
                    <ListItemText primary={data.name} />
                  </ListItem>
                  <Divider />
                </Box>
              </>
            );
          })}
      </Box>
    );
  };
  const onSearchHanlder = (e) => {
    e.preventDefault();
    let searchText = e.target.value;
    setSearchValue(searchText);
    // apiData.filter((item) => {
    //   let filterData = item?.right?.forEach((data) =>
    //     if(data.name.toLowerCase().includes(searchText)){
    //       return {
    //           id: item?.id,
    //           catagory: item?.catagory,
    //           right: [data],
    //       }
    //     }
    //   );
    //   console.log(
    //     "🚀 ~ file: Project.js:389 ~ apiData.map ~ filterData:",
    //     filterData,
    //   );
    // });
  };
  return (
    <Box>
      <Box
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <input
          value={searchValue}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => onSearchHanlder(e)}
        />
      </Box>
      <Box style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <Box
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Catagory:
          </Typography>
          {apiData?.map((item) => {
            return (
              <>
                <RenderItem item={item} type={"Catagory"} />
              </>
            );
          })}
        </Box>
        <Box
          style={{
            flex: 0.4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <Button variant="text" size="large" onClick={() => addHanlder()}>
            <AiOutlineRight size={"30px"} />
          </Button>
          <Button variant="text" size="large" onClick={() => RemoveHanlder()}>
            <AiOutlineLeft size={"30px"} />
          </Button>
        </Box>
        <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Selected:
          </Typography>
          {selectedItem?.map((item) => {
            return (
              <>
                <RenderRightItem item={item} type={"seclected"} />
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
