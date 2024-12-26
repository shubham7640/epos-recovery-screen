import ListHeader from "./ListHeader";
import ListItems from "./ListItems";

const RecoveryList = () => {
  return (
    <div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <ListHeader />
        <ListItems />
      </table>
    </div>
  );
};
export default RecoveryList;
