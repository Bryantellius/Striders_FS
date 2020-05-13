import { IActivity } from "./types";

export const setProgressBar = async (
  activities: [],
  runs: [],
  walks: [],
  bikes: [],
  swims: []
) => {
  let rw = Math.round((runs.length / activities.length) * 100);
  let ww = Math.round((walks.length / activities.length) * 100);
  let bw = Math.round((bikes.length / activities.length) * 100);
  let sw = Math.round((swims.length / activities.length) * 100);

  document.getElementById("runs").style.width = `${rw}%`;
  if (rw > 0) {
    document.getElementById("runs").innerHTML = `${rw}%`;
  }
  document.getElementById("walks").style.width = `${ww}%`;
  if (ww > 0) {
    document.getElementById("walks").innerHTML = `${ww}%`;
  }
  document.getElementById("bikes").style.width = `${bw}%`;
  if (bw > 0) {
    document.getElementById("bikes").innerHTML = `${bw}%`;
  }
  document.getElementById("swims").style.width = `${sw}%`;
  if (sw > 0) {
    document.getElementById("swims").innerHTML = `${sw}%`;
  }
};

export const getSums = (
  activities: IActivity[],
  runs: IActivity[],
  walks: IActivity[],
  bikes: IActivity[],
  swims: IActivity[]
) => {
  let rs = runs.reduce((acc, { distance }) => acc + Number(distance), 0);
  let ws = walks.reduce((acc, { distance }) => acc + Number(distance), 0);
  let bs = bikes.reduce((acc, { distance }) => acc + Number(distance), 0);
  let ss = swims.reduce((acc, { distance }) => acc + Number(distance), 0);
  return { rs, ws, bs, ss };
};

export default {
  setProgressBar,
  getSums,
};
