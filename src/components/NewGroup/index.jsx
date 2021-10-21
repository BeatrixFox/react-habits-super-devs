import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Button from "../Button";
import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
import { Modal, Box } from "@material-ui/core";
import { Input, Form } from "./styles";

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
  p: {
    xs: 3,
    md: 3,
    sm: 9,
  },
};

const optionsCategory = [
  { value: "hardSkill", label: "HardSkills" },
  { value: "softSkill", label: "SoftSkills" },
  { value: "saude", label: "Saúde" },
];

export const NewGroup = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { createGroup } = useContext(GroupsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup
      .string()
      .max(200, "Máx de 200 caracteres")
      .required("Campo obrigatório"),
    category: yup.object().required("Campo obrigatório"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    createGroup({
      name: userData.name,
      description: userData.description,
      category: userData.category.value,
    });

    handleClose();
  };

  return (
    <div>
      <Button
        handleClick={handleOpen}
        type={"submit"}
        title={"Novo Grupo"}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <h3>Novo Grupo</h3>
            <Input placeholder="Nome do novo grupo" {...register("name")} />
            <p>{errors.name?.message}</p>
            <Input
              placeholder="Descrição do grupo"
              {...register("description")}
            />
            <p>{errors.title?.message}</p>

            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select {...field} options={optionsCategory} />
              )}
            />
            <p>{errors.category?.message}</p>

            <div>
              <Button type={"submit"} title={"adicionar"}></Button>
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default NewGroup;
