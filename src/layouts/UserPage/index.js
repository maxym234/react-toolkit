import { Table } from "../../ui/Table";
import {columns} from "./columns";

export const UserPage = ({ data = [] }) => {
    return (
      <div>
        <Table dataSource={data} columns={columns}/>
      </div>
    );
  };