import { defineSitemapEventHandler } from '#imports';
import projects from '~/public/assets/data/projects.json';

export default defineSitemapEventHandler(() => {
  const routes = projects.map((project) => ({
    loc: `/portfolio/${project.slug}`,
  }));
  return routes;
});
