type TNumberOrString = number | string;

type TNullOrUndefined = null | undefined;

type TUnknownOrAny = unknown | any;

type TArray<Type> = Array<Type>;

type TObject<
  Key extends string = string,
  Values =
    | TNumberOrString
    | TNullOrUndefined
    | TUnknownOrAny
    | Record<Key, Value>
    | TArray<Value>,
> = Record<Key, Values>;

type TZodInfer<Schema> = import('zod').infer<Schema>;
