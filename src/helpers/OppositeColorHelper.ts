import ColorEnum from "@/models/common/ColorEnum";

export default function getOppositeColor(color: ColorEnum): ColorEnum {
  return color === ColorEnum.Black ? ColorEnum.White : ColorEnum. Black;
}
