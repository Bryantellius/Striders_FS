export const setProgressBar = async (
  activities: [],
  runs: [],
  walks: [],
  bikes: [],
  swims: []
) => {
  let rw = Math.floor(runs.length / activities.length) * 100;
  let ww = Math.floor(walks.length / activities.length) * 100;
  let bw = Math.floor(bikes.length / activities.length) * 100;
  let sw = Math.floor(swims.length / activities.length) * 100;

  document.getElementById("runs").style.width = `${rw}%`;
  document.getElementById("runs").innerHTML = `${rw}%`;
  document.getElementById("walks").style.width = `${ww}%`;
  document.getElementById("walks").innerHTML = `${ww}%`;
  document.getElementById("bikes").style.width = `${bw}%`;
  document.getElementById("bikes").innerHTML = `${bw}%`;
  document.getElementById("swims").style.width = `${sw}%`;
  document.getElementById("swims").innerHTML = `${sw}%`;
};

export const setSums = (
  activities: [],
  runs: any[],
  walks: any[],
  bikes: any[],
  swims: any[]
) => {
//   let rs = activities.reduce(
    // (acc: number, distance: number) => acc + distance
//   );
};

export default {
  setProgressBar,
};
