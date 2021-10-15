const onGetPositionSuccess = (position) => {
  console.log(position);
};

const onGetPositionError = (error) => {
  console.log(error);
};

const location = window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);

export default location;
