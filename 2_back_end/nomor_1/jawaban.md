## Jawaban
________

1. Untuk soal pertama (fungsi get_first_item), Big-O Notation-nya adalah O(1) -> Constant. Dimana sebesar apapun size array/data yang dimasukkan ke fungsi tersebut, total waktu dan memori yang digunakan untuk menjalankan fungsi tersebut tetap sama, karena hanya me-return element pertama dari array input.

2. Untuk soal kedua (fungsi check_duplicate), Big-O Notation-nya adalah O(n^2) -> Quadratic. Dimana semakin besar size array/data yang dimasukkan ke fungsi tersebut, total waktu dan memori yang digunakan untuk menjalankan fungsi tersebut akan semakin bertaman secara kuadratis. Hal ini dikarenakan adanya nested loop di dalam fungsi tersebut, sehingga proses yang terjadi pada saat nested loop tersebut adalah n*n, dimana n merupakan size array input. Loop terluar dieksekusi berjalan sebanyak n kali, dan loop di dalam berjalan sebanyak n kali banyaknya eksekusi loop terluar.

3. Untuk soal ketiga (fungsi Fibonacci), Big-O Notation-nya adalah O(2^n) -> Exponential. Untuk fungsi rekursi kita bisa menghitung Big-O Notation-nya berdasarkan recursion tree-nya, dengan menggunakan notasi O(b^d), dimana b adalah branching factor-nya, dan d adalah depth(kedalaman) dari recursion tree. Dalam fungsi Fibonacci terdapat 2 branching factor yaitu saat:
```python
return Fibonacci(number - 2) #1
  + 
  Fibonacci(number - 1) #2
```
   Sehingga b = 2, dan depth dari recursion treenya berbading lurus secara linear dengan inputannya, maka dari itu didapatkan notasinya adalah O(2^n)