import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Data } from "./Data";
const Project = () => {
  const [refresh, setRefresh] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [apiData, setApiData] = useState();
  const [childID, setChildID] = useState("");
  const [parentID, setParentID] = useState("");
  const onClickHandler = (childId, parentId, item) => {
    setChildID(childId);
    setParentID(parentId);
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
    const isPresent = selectedItem.filter((value) => value?.id === parentID);
    array.forEach((value, index) => {
      value?.right?.forEach((data, ini) => {
        if (data.isAddChecked) {
          if (isPresent?.length > 0) {
            selectedItem.forEach((item, ind) => {
              if (item?.id === data?.parentId) {
                selectedItem[ind].right.push(data);
                apiData.forEach((apiDataitem, itemindex) => {
                  apiDataitem?.right.forEach((api, apiindex) => {
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
            selectedItem.push({
              id: value?.id,
              catagory: value?.catagory,
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
    console.log("first");
    const array = selectedItem.filter((item) => item.id === parentID);
    const isPresent = apiData.filter((value) => value?.id === parentID);
    array.forEach((value, index) => {
      value?.right?.forEach((data, ini) => {
        if (data.isRemoveChecked) {
          if (isPresent?.length > 0) {
            apiData.forEach((item, ind) => {
              if (item?.id === data?.parentId) {
                apiData[ind].right.push(data);
                selectedItem.forEach((apiDataitem, itemindex) => {
                  apiDataitem?.right.forEach((api, apiindex) => {
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
              id: value?.id,
              catagory: value?.catagory,
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
  useEffect(() => {
    setApiData(Data);
  }, []);

  return (
    <Box
      sx={{
        marginLeft: 5,
        marginRight: 5,
      }}
    >
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
