/**
 * Gitignore Template
 */
export interface GitignoreTemplate {
	/**
  * @example
C
  */
	name: string;
	/**
  * @example
# Object files
*.o

# Libraries
*.lib
*.a

# Shared objects (inc. Windows DLLs)
*.dll
*.so
*.so.*
*.dylib

# Executables
*.exe
*.out
*.app

  */
	source: string;
}
