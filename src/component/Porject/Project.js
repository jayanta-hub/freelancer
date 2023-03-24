import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Project = () => {
  const [refresh, setRefresh] = useState(0);
  const [selectedItem, setSelectedItem] = useState([]);
  console.log(
    "🚀 ~ file: Project.js:16 ~ Project ~ selectedItem:",
    selectedItem,
  );
  const [apiData, setApiData] = useState([
    {
      id: 1,
      catagory: "Dog",
      right: [
        {
          id: 6,
          name: "West Highland White Terrier",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 7,
          name: "Rhodesian Ridgeback",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 8,
          name: "Newfoundland",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 9,
          name: "Basset Hound",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 10,
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
          name: "Devon Rex Cats",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 12,
          name: "Abyssinian Cats",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 13,
          name: "Sphynx Cats",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 14,
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
          name: "INDIAN CHEVROTAIN",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 16,
          name: "HIMALAYAN MUSK DEER",
          isAddChecked: false,
          isRemoveChecked: false,
        },
        {
          id: 17,
          name: "INDIAN OR RED MUNTJAC",
          isAddChecked: false,
          isRemoveChecked: false,
        },
      ],
    },
    // {
    //   id: 4,
    //   isChecked: false,
    //   catagory: "Tiger",
    //   right: [
    //     "Bengal Tiger",
    //     "Siberian Tiger",
    //     "Sumatran Tiger",
    //     "Indochinese Tiger.",
    //     "Malayan Tiger.",
    //   ],
    // },
    // {
    //   id: 5,
    //   isChecked: false,
    //   catagory: "Parrot",
    //   right: [
    //     "Indian Ringneck Parrot",
    //     "Scarlet Macaw",
    //     "Blue and Gold Macaw",
    //     "Green Winged Macaw.",
    //     "Hyacinth Macaw.",
    //   ],
    // },
  ]);
  let [childID, setChildID] = useState("");
  let [parentID, setParentID] = useState("");
  const onClickHandler = (childId, parentId) => {
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
  const addRemoveHanlder = (actionType) => {
    const array = apiData.filter((item) => item.id === parentID);
    const filterArray = array.forEach((item, ind) => {
      let finalData = item?.right?.forEach((data, index) => {
        if (data.isAddChecked) {
          return {
            id: array[ind].id,
            catagory: array[ind].catagory,
            right: [data],
          };
        }
      });
      console.log(
        "🚀 ~ file: Project.js:153 ~ finalData ~ finalData:",
        finalData,
      );
      return finalData;
    });
    console.log(
      "🚀 ~ file: Project.js:142 ~ array ~ filterArray:",
      filterArray,
    );
    // setSelectedItem([...selectedItem, array[0]]);
    setRefresh(refresh + 1);
  };
  const RenderItem = ({ item }) => {
    return (
      <div key={item.id}>
        <div
          style={{
            background: "#FFFFFF",
          }}
        >
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {item.catagory}
          </Typography>
          <hr></hr>
        </div>
        {item?.right?.map((data, ind) => {
          return (
            <>
              <div
                key={data.id}
                onClick={() => {
                  onClickHandler(data.id, item.id);
                }}
                style={{
                  background: data.isAddChecked ? "#92cbdf" : "FFFFFF",
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
  return (
    <div>
      <div
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
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <div
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <h6 style={{ marginTop: 0 }}>Catagory:</h6>
          {apiData?.map((item) => {
            return (
              <>
                <RenderItem item={item} />
              </>
            );
          })}
        </div>
        <div
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
          <Button
            variant="text"
            size="large"
            onClick={() => addRemoveHanlder("add")}
          >
            <AiOutlineRight size={"30px"} />
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={() => addRemoveHanlder("remove")}
          >
            <AiOutlineLeft size={"30px"} />
          </Button>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h6 style={{ marginTop: 0 }}>Selected</h6>
          {selectedItem?.map((item) => {
            return (
              <>
                <RenderItem item={item} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
