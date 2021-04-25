# Part 1a

1. 20

2. 20

3. 20

4. Error because the result variable is not defined outside of the if statement

5. Error because const variables cannot be reassigned

6. Error because result is undefined outside of the if statement

# Part 1b

1. Line 12 will print 3 because the var i still exists within the function discountPrices, and it was incremented 3 times in the for loop.

2. Line 13 will print 150 because the var discountedPrice was last assigned to 150 in the for loop, and it still exists within the function. All var declarations are essentially "moved" to the top of the function.

3. Line 14 will print 150 because finalPrice was last assigned to 150 in the for statement and the variable still exists within the function.

4. The function discountPrices will return an array of the prices with the discount applied to it because the function takes each element in the prices array, multiplies it by the discount in decimal form, and adds the discounted price into an array that is returned. discountPrices([100, 200, 300], 0.5) will return an array with the prices half off which is [50, 100, 150]. 

5. Error because i is not defined outside of the for loop due to the scope restrictions of the let keyword

6. Error because discountedPrice is not defined outside of the for loop since the let keyword would only define it inside the for loop

7. Line 14 will print 150 because finalPrice is declared at the beginning of the function so any changes to it in the for loop will also be reflected in the variable's value

8. This function will return [50, 100, 150] because the discounted array is declared outside the for loop so any changes to it in the for loop will change the variable in the function as well

9. Error because i is not defined outside of the for loop since its declaration uses the let keyword

10. It will print 3 because that is the length of the array that is assigned to the const variable length

11. This function will return [50, 100, 150] because the const keyword is block scoped which means that each iteration of the for loop creates a new const discountedPrice variable that is not reassigned at any time

12a. student.name

12b. student["Grad Year"]

12c. student.greeting()

12d. student["Favorite Teacher"].name

12e. student.courseload[1]

13a. '32' because addition is a string operation (append) so the integer 2 maps to its string representation and appends to the string '3'

13b. 1 because you cannot perform subtraction on strings so '3' becomes its number representation and 2 is subtrated from 3

13c. 3 because addition is a number operation so null becomes 0

13d. '3null' because addition is a string append operation which then appends the string 'null'

13e. 4 because the addition is a number operation which then converts true to 1 and adds it to 3

13f. 0 because the number representation of both false and null is 0

13g. '3undefined' because the addition acts as an append operation and appends undefined as a string to '3'

13h. NaN because it tries to do a numeric subtraction but undefined becomes NaN in numeric conversion which can't be subtracted

14a. true because '2' is seen as its numeric representation and 2 is greater than 1

14b. false because it is using dictionary comparison in which the char '1' from '12' is not greater than '2'

14c. true because '2' becomes the number 2

14d. false because the strict equality checks equality without type conversion which means that the number 2 is not equal to the string '2'

14e. false because true's number value is 1 which is not equal to 2

14f. true because the boolean conversion of 2 is true (since it's not 0, null, undefined, NaN, or "") which is strictly equal to true

15. The == operator is a regular equality check that cannot differentiate between the types so it performs type conversion on the values during equality check. The === operator is a strict equality that checks equality without type conversion so it cannot return true if the values have mismatched types.

17. The result is [2, 4, 6]. We first trace through modifyArray which takes an array and a callback and returns a new array with the callback function applied to the array's elements. In modifyArray, a new const array is created. Then for each element in the parameter array, apply callback on it (which multiplies it by 2 in this case) and push the result to the new array. Since this is not a reassignment of the const array, it is allowed. Lastly, the new const array is returnen.

19. 1
    
    4
    
    3
    
    2

