import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { URL_API } from "../utils/constants";
import { Task } from "../types/Task.type";

const useTasks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError<any> | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    setLoading(true);

    try {
      const response = await axios.get(URL_API);
      setTasks(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return {
    loading,
    tasks,
    error,
    getTasks,
  };
};

export default useTasks;
