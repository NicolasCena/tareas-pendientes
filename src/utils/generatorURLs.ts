import { TaskAppointment, TaskConsent, TaskForm } from "../types/Task.type";
import { BASE_PATH } from "./constants";

export const TaskConsentsURLs = (task: TaskConsent) => {

    const URLs = {
        cumplimentar: task.permisoCumplimentar ?  `BASE_PATH/form-cumplimentar?episodio=${task.idEpisodio}` : null,
        formularioDecisiones: task.decisionesCompartidas ?  `BASE_PATH/form-decisiones?episodio=${task.idEpisodio}&guid=${task.guid}` : null,
        validic: task.validic ?  `BASE_PATH/form-validic?formActivo=${task.idFormularioActivo}` : null,
        rellenar: task.rellenar ?  `BASE_PATH/form-rellenar?codigo=${task.codPlantillaFormulario}` : null,
    };

    return URLs;
};

export const TaskFormURLs = (task: TaskForm) => {};

export const TaskAppointmentURLs = (task: TaskAppointment) => {};
