# Soal 1
def get_first_item(arr):
  return arr[0]

# Soal 2
def check_duplicate(arr):
  for outer in range(len(arr)):
    for inner in range(len(arr)):
      if outer == inner:
        continue
      if arr[outer] == arr[inner]:
        return True
  return False

# Soal 3
def Fibonacci(number):
  if number <= 1:
    return number
  return Fibonacci(number - 2) + Fibonacci(number - 1)