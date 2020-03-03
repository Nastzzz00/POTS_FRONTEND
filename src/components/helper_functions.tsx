export const handleClick = (key: any, state: any, setState: any) => {
  const path = () => {
    switch (key) {
      case "dashboard":
        return "/";

      case "order":
        return "/Orders";

      case "supplier":
        return "/Suppliers";

      default:
        break;
    }
  };
  setState({
    ...state,
    currentKey: key,
    path: path()
  });
};

export const showContent = (
  key: any,
  DBcontent: any,
  POcontent: any,
  SUPcontent: any
) => {
  switch (key) {
    case "dashboard":
      return DBcontent;

    case "order":
      return POcontent;

    case "supplier":
      return SUPcontent;

    default:
      break;
  }
};
