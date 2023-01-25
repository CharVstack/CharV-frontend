#!/bin/bash
list_directories() {
  find ./src -type d
}
list_index_files() {
  find ./src -type f -name 'index\.*'
}
subtract() {
  diff "$1" "$2" | grep '^< ' | sed -e 's/< //'
}

(
  subtract <(list_directories) <(list_index_files | xargs -I{} dirname {} | uniq) | sed -e 's/$/\/*/'
  list_index_files
)  | sed -e 's/\.\/src/**/' | sed -e '/\*\*\/\*/d'
