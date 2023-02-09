import { Box, Button, NavLink } from "@mantine/core";
import { useEffect } from "react";
import useProjects from "../../hooks/useProjects";

const ProjectList = () => {
  useEffect(() => {
    getProjects();
  }, []);

  const { projects, getProjects, setSelectedProject } = useProjects();

  return (
    <Box>
      {projects?.map((project) => {
        return (
          <NavLink
            onClick={() => setSelectedProject(project)}
            icon={<img style={{ width: 20, marginRight: 5 }} src={project.avatarUrls["16x16"]} />}
            label={project.name}
          />
        );
      })}
    </Box>
  );
};

export default ProjectList;
