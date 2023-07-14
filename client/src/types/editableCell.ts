export interface IEditableCell<T> {
  value: T;
  setNewValue: React.Dispatch<React.SetStateAction<T>>;
}
