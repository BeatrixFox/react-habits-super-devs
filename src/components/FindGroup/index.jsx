import Button from "../Button";
import { useContext, useState } from "react";
import { Container } from "./styles";
import { GroupsContext } from "../../Providers/Groups";
import { Modal, TextField, Box } from "@material-ui/core";
import GroupsCard from "../GroupsCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 500,
    xl: 600,
  },

  bgcolor: "background.paper",
  border: "2px solid #007aff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const FindGroup = ({ isMyGroups }) => {
  const [groupToSearch, setGroupToSearch] = useState("");
  const { groups, myGroups } = useContext(GroupsContext);
  const [found, setFound] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlerClickFinding = (groupToSearch) => {
    let search = "";
    isMyGroups ? (search = myGroups) : (search = groups);
    const oneTime = search.filter((group) => group.name === groupToSearch);

    setFound(oneTime);
    setGroupToSearch("");
  };

  return (
    <Container>
      <Button title="Procurar Grupo" handleClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Procurar grupo</h1>
          <TextField
            fullWidth
            label="Digite o nome do grupo"
            margin="normal"
            variant="filled"
            size="small"
            color="primary"
            value={groupToSearch}
            onChange={(e) => setGroupToSearch(e.target.value)}
          />

          <Button
            title="Procurar"
            type="click"
            handleClick={() => handlerClickFinding(groupToSearch)}
          />

          <ul>
            {found.map((group) => (
              <li key={group.id}>
                <GroupsCard group={group} />
              </li>
            ))}
          </ul>
        </Box>
      </Modal>
    </Container>
  );
};

export default FindGroup;
