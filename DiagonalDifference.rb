def diagonalDifference(arr)
    
    main_diagonal_sum = 0
    main_skew_diagonal_sum = 0
    arr.each_with_index do |row, i|
        main_diagonal_sum += row[i]
        main_skew_diagonal_sum += row[-i-1]
    end
    

    (main_diagonal_sum - main_skew_diagonal_sum).abs

end