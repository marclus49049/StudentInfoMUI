import {
  GridEditSingleSelectCell,
  GridEditSingleSelectCellProps,
  useGridApiContext,
} from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";

export function CustomSelect(
  props: GridEditSingleSelectCellProps & {
    handleValueChange: (
      ref: React.MutableRefObject<GridApiCommunity>
    ) => Promise<void>;
  }
) {
  const apiRef = useGridApiContext();

  const onValueChange = async () => {
    await props?.handleValueChange(apiRef);
  };

  return <GridEditSingleSelectCell onValueChange={onValueChange} {...props} />;
}
