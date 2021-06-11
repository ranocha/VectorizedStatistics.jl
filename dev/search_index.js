var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = VectorizedStatistics","category":"page"},{"location":"#VectorizedStatistics","page":"Home","title":"VectorizedStatistics","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for VectorizedStatistics.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [VectorizedStatistics]","category":"page"},{"location":"#VectorizedStatistics.vcor-Tuple{AbstractMatrix{T} where T}","page":"Home","title":"VectorizedStatistics.vcor","text":"vcor(X::AbstractMatrix; dims::Int=1)\n\nCompute the (Pearson's product-moment) correlation matrix of the matrix X, along dimension dims. As Statistics.cor, but vectorized.\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vcor-Tuple{AbstractVector{T} where T, AbstractVector{T} where T}","page":"Home","title":"VectorizedStatistics.vcor","text":"vcor(x::AbstractVector, y::AbstractVector)\n\nCompute the (Pearson's product-moment) correlation between the vectors x and y. As Statistics.cor, but vectorized.\n\nEquivalent to cov(x,y) / (std(x) * std(y)).\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vcov-Tuple{AbstractMatrix{T} where T}","page":"Home","title":"VectorizedStatistics.vcov","text":"vcov(X::AbstractMatrix; dims::Int=1, corrected::Bool=true)\n\nCompute the covariance matrix of the matrix X, along dimension dims. As Statistics.cov, but vectorized.\n\nIf corrected is true as is the default, Bessel's correction will be applied, such that the sum is scaled by n-1 where n = length(x).\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vcov-Tuple{AbstractVector{T} where T, AbstractVector{T} where T}","page":"Home","title":"VectorizedStatistics.vcov","text":"vcov(x::AbstractVector, y::AbstractVector; corrected::Bool=true)\n\nCompute the covariance between the vectors x and y. As Statistics.cov, but vectorized.\n\nIf corrected is true as is the default, Bessel's correction will be applied, such that the sum is scaled by n-1 where n = length(x).\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vextrema-Tuple{Any}","page":"Home","title":"VectorizedStatistics.vextrema","text":"vextrema(A; dims)\n\nAs Base.extrema, but vectorized: Find the maximum and minimum of A, optionally along the dimensions specified by dims.\n\nExamples\n\njulia> A = reshape(Vector(1:2:16), (2,2,2)) 2×2×2 Array{Int64, 3}:  [:, :, 1] =   1  5   3  7\n\n[:, :, 2] =    9  13   11  15\n\njulia> extrema(A, dims = (1,2)) 1×1×2 Array{Tuple{Int64, Int64}, 3}:  [:, :, 1] =   (1, 7)\n\n[:, :, 2] =   (9, 15)\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vmaximum-Tuple{Any}","page":"Home","title":"VectorizedStatistics.vmaximum","text":"vmaximum(A; dims)\n\nAs Base.maximum, but vectorized: find the greatest value contained in A, optionally over dimensions specified by dims.\n\nExamples\n\njulia> using VectorizedStatistics\n\njulia> A = [1 2; 3 4]\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\njulia> vmaximum(A, dims=1)\n1×2 Matrix{Int64}:\n 3  4\n\njulia>  vmaximum(A, dims=2)\n 2×1 Matrix{Int64}:\n 2\n 4\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vmean-Tuple{Any}","page":"Home","title":"VectorizedStatistics.vmean","text":"vmean(A; dims)\n\nAs Statistics.mean, but vectorized: compute the mean of all elements in A, optionally over dimensions specified by dims.\n\nExamples\n\njulia> using VectorizedStatistics\n\njulia> A = [1 2; 3 4]\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\njulia> vmean(A, dims=1)\n1×2 Matrix{Float64}:\n 2.0  3.0\n\njulia> vmean(A, dims=2)\n2×1 Matrix{Float64}:\n 1.5\n 3.5\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vminimum-Tuple{Any}","page":"Home","title":"VectorizedStatistics.vminimum","text":"vminimum(A; dims)\n\nAs Base.minimum, but vectorized: find the least value contained in A, optionally over dimensions specified by dims.\n\nExamples\n\njulia> using VectorizedStatistics\n\njulia> A = [1 2; 3 4]\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\njulia> vminimum(A, dims=1)\n1×2 Matrix{Int64}:\n 1  2\n\njulia> vminimum(A, dims=2)\n 2×1 Matrix{Int64}:\n 1\n 3\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vstd-Tuple{Any}","page":"Home","title":"VectorizedStatistics.vstd","text":"vstd(A; dims=:, mean=nothing, corrected=true)\n\nAs Statistics.var, but vectorized: compute the variance of all elements in A, optionally over dimensions specified by dims. A precomputed mean may optionally be provided, which results in a somewhat faster calculation. If corrected is true, then Bessel's correction is applied.\n\nExamples\n\njulia> using VectorizedStatistics\n\njulia> A = [1 2; 3 4]\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\njulia> vstd(A, dims=1)\n1×2 Matrix{Float64}:\n 1.41421  1.41421\n\njulia> vstd(A, dims=2)\n2×1 Matrix{Float64}:\n 0.7071067811865476\n 0.7071067811865476\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vsum-Tuple{Any}","page":"Home","title":"VectorizedStatistics.vsum","text":"vsum(A; dims)\n\nAs Base.sum, but vectorized: summate the values contained in A, optionally over dimensions specified by dims.\n\nExamples\n\njulia> using VectorizedStatistics\n\njulia> A = [1 2; 3 4]\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\njulia> vsum(A, dims=1)\n1×2 Matrix{Int64}:\n 4  6\n\njulia> vsum(A, dims=2)\n 2×1 Matrix{Int64}:\n 3\n 7\n\n\n\n\n\n","category":"method"},{"location":"#VectorizedStatistics.vvar-Tuple{Any}","page":"Home","title":"VectorizedStatistics.vvar","text":"vvar(A; dims=:, mean=nothing, corrected=true)\n\nAs Statistics.var, but vectorized: compute the variance of all elements in A, optionally over dimensions specified by dims. A precomputed mean may optionally be provided, which results in a somewhat faster calculation. If corrected is true, then Bessel's correction is applied.\n\nExamples\n\njulia> using VectorizedStatistics\n\njulia> A = [1 2; 3 4]\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\njulia> vvar(A, dims=1)\n1×2 Matrix{Float64}:\n 2.0  2.0\n\njulia> vvar(A, dims=2)\n2×1 Matrix{Float64}:\n 0.5\n 0.5\n\n\n\n\n\n","category":"method"}]
}
