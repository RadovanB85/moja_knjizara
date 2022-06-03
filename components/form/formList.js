import classes from "./form.module.scss";
import FormItem from "./formItem";

function FormList(props) {
  return (
    <div className={classes.search_container}>
      <div className={classes.search_form_container}>
        <ul></ul>
      </div>
    </div>
  );
}

export default FormList;
